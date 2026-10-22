const PARAM_VALUES = {
  section_id: ['inicio', 'servicios', 'tacografos', 'productos', 'nosotros', 'contacto'],
  placement: ['header', 'hero', 'products', 'contact', 'footer'],
  channel: ['email', 'whatsapp', 'map'],
  action: ['view_services', 'request_quote', 'request_products'],
}

const EVENTS = {
  navigation_click: ['section_id', 'placement'],
  section_view: ['section_id'],
  cta_click: ['action', 'placement'],
  contact_click: ['channel', 'placement'],
}

// Inject browser objects so consent and event behavior can be tested without network calls.
export function createAnalytics({ measurementId = '', enabled = false, browserWindow, browserDocument }) {
  const available = enabled && /^G-[A-Z0-9]+$/.test(measurementId)
  let granted = false
  let initialized = false
  let pageViewed = false
  const viewedSections = new Set()

  function pageDetails() {
    let referrer = ''
    try {
      referrer = new URL(browserDocument.referrer).origin
    } catch { /* Direct visits have no referrer. */ }
    return {
      page_location: browserWindow.location.origin + browserWindow.location.pathname,
      page_referrer: referrer,
      page_title: 'Infortac',
    }
  }

  function setConsent(allow) {
    if (!available || granted === allow) return
    granted = allow
    browserWindow[`ga-disable-${measurementId}`] = !allow

    if (!allow) {
      browserWindow.gtag?.('consent', 'update', { analytics_storage: 'denied' })
      const cookieNames = ['_ga', `_ga_${measurementId.slice(2)}`]
      const hostname = browserWindow.location.hostname
      const domains = ['', hostname, ...hostname.split('.').map((_, i, parts) => `.${parts.slice(i).join('.')}`)]
      for (const name of cookieNames) {
        for (const domain of domains) {
          browserDocument.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''}`
        }
      }
      return
    }

    if (!initialized) {
      browserWindow.dataLayer = browserWindow.dataLayer || []
      browserWindow.gtag = function () { browserWindow.dataLayer.push(arguments) }
      browserWindow.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
      browserWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
      browserWindow.gtag('js', new Date())
      browserWindow.gtag('config', measurementId, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        ...pageDetails(),
      })
      const script = browserDocument.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      browserDocument.head.appendChild(script)
      initialized = true
    } else {
      browserWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
    }

    if (!pageViewed) {
      browserWindow.gtag('event', 'page_view', { send_to: measurementId, ...pageDetails() })
      pageViewed = true
    }
  }

  function track(name, params = {}) {
    if (!available || !granted || !Object.hasOwn(EVENTS, name)) return
    const allowed = {}
    for (const key of EVENTS[name]) {
      if (!PARAM_VALUES[key].includes(params[key])) return
      allowed[key] = params[key]
    }
    if (name === 'section_view') {
      if (viewedSections.has(allowed.section_id)) return
      viewedSections.add(allowed.section_id)
    }
    browserWindow.gtag('event', name, { ...allowed, send_to: measurementId, ...pageDetails() })
  }

  return { available, setConsent, track }
}
