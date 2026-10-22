import assert from 'node:assert/strict'
import test from 'node:test'
import { buildContactUrl } from '../src/lib/contact.js'

const form = {
  name: '  José Pérez  ',
  phone: '+598 94 123 456',
  email: 'jose+flota@example.com',
  message: '¿Discos de 125 km/h & 180 km/h?\nPrecio: 10% / envío #1',
}

test('email preserves accents, line breaks and reserved characters without injecting recipients', () => {
  const url = new URL(buildContactUrl(form))
  assert.equal(url.protocol, 'mailto:')
  assert.equal(url.pathname, 'infortac@adinet.com.uy')
  assert.equal(url.searchParams.get('subject'), 'Consulta desde la web - Infortac')
  assert.equal(url.searchParams.get('body'), `Nombre: José Pérez\nTeléfono: +598 94 123 456\nEmail: jose+flota@example.com\n\nMensaje:\n${form.message}`)
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body'])
  assert.equal(url.hash, '')
})

test('WhatsApp uses the business number and preserves the complete inquiry', () => {
  const url = new URL(buildContactUrl(form, 'whatsapp'))
  assert.equal(url.origin, 'https://wa.me')
  assert.equal(url.pathname, '/59894562495')
  assert.equal(url.searchParams.get('text'), new URL(buildContactUrl(form)).searchParams.get('body'))
  assert.deepEqual([...url.searchParams.keys()], ['text'])
})

test('empty optional phone remains valid and message text cannot inject email headers', () => {
  const url = new URL(buildContactUrl({ ...form, phone: '', message: '&bcc=other@example.com\n#fragment' }))
  assert.equal(url.searchParams.has('bcc'), false)
  assert.equal(url.hash, '')
  assert.ok(url.searchParams.get('body').includes('Teléfono: \n'))
  assert.ok(url.searchParams.get('body').endsWith('&bcc=other@example.com\n#fragment'))
})
