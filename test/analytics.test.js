import assert from 'node:assert/strict'
import test from 'node:test'
import { createAnalytics } from '../src/lib/analytics.js'

function setup(options = {}) {
  const scripts = []
  const browserWindow = { location: new URL('https://www.infortac.com/?email=private@example.com#contacto') }
  const browserDocument = {
    referrer: 'https://www.google.com/search?q=private',
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
    cookie: '',
  }
  const analytics = createAnalytics({ measurementId: 'G-TEST123456', enabled: true, browserWindow, browserDocument, ...options })
  const events = () => (browserWindow.dataLayer || []).map((command) => [...command]).filter(([type]) => type === 'event')
  return { analytics, scripts, browserWindow, browserDocument, events }
}

test('no tag or events before consent, including explicit rejection', () => {
  const { analytics, scripts, browserWindow } = setup()
  analytics.track('contact_click', { channel: 'email', placement: 'contact' })
  analytics.setConsent(false)
  assert.equal(scripts.length, 0)
  assert.equal(browserWindow.dataLayer, undefined)
})

test('accepting initializes once, denies advertising, and sends one sanitized page view', () => {
  const { analytics, scripts, browserWindow, events } = setup()
  analytics.setConsent(true)
  analytics.setConsent(true)
  assert.equal(scripts.length, 1)
  assert.equal(scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-TEST123456')
  assert.equal(scripts[0].async, true)
  assert.equal(events().length, 1)
  assert.equal(events()[0][1], 'page_view')
  assert.equal(events()[0][2].page_location, 'https://www.infortac.com/')
  assert.equal(events()[0][2].page_referrer, 'https://www.google.com')
  const commands = browserWindow.dataLayer.map((command) => [...command])
  assert.equal(commands[0][2].ad_storage, 'denied')
  assert.equal(commands[0][2].ad_user_data, 'denied')
  assert.equal(commands.find(([type]) => type === 'config')[2].send_page_view, false)
})

test('only known event names, fields and values are sent; personal fields are discarded', () => {
  const { analytics, events } = setup()
  analytics.setConsent(true)
  analytics.track('contact_click', { channel: 'email', placement: 'contact', email: 'private@example.com', message: 'private' })
  analytics.track('contact_click', { channel: 'private@example.com', placement: 'contact' })
  analytics.track('unexpected_event', { message: 'private' })
  assert.equal(events().length, 2)
  const contact = events()[1][2]
  assert.equal(contact.channel, 'email')
  assert.equal(contact.placement, 'contact')
  assert.equal(Object.hasOwn(contact, 'email'), false)
  assert.equal(Object.hasOwn(contact, 'message'), false)
  assert.equal(JSON.stringify(events()).includes('private'), false)
})

test('sections count once per page load and withdrawal stops new events', () => {
  const { analytics, events, scripts, browserWindow, browserDocument } = setup()
  analytics.setConsent(true)
  analytics.track('section_view', { section_id: 'productos' })
  analytics.track('section_view', { section_id: 'productos' })
  analytics.setConsent(false)
  assert.equal(browserWindow['ga-disable-G-TEST123456'], true)
  assert.ok(browserDocument.cookie.includes('Max-Age=0'))
  analytics.track('contact_click', { channel: 'whatsapp', placement: 'footer' })
  assert.equal(events().length, 2)
  analytics.setConsent(true)
  assert.equal(browserWindow['ga-disable-G-TEST123456'], false)
  analytics.track('contact_click', { channel: 'whatsapp', placement: 'footer' })
  assert.equal(events().length, 3)
  assert.equal(events().filter(([, name]) => name === 'page_view').length, 1)
  assert.equal(scripts.length, 1)
})

test('missing or malformed IDs and disabled environments never initialize', () => {
  for (const options of [{ measurementId: '' }, { measurementId: 'G-bad<script>' }, { enabled: false }]) {
    const { analytics, scripts, events } = setup(options)
    analytics.setConsent(true)
    assert.equal(analytics.available, false)
    assert.equal(scripts.length, 0)
    assert.equal(events().length, 0)
  }
})

test('a direct visit without a referrer still records a page view', () => {
  const { analytics, browserDocument, events } = setup()
  browserDocument.referrer = ''
  analytics.setConsent(true)
  assert.equal(events()[0][2].page_referrer, '')
})
