import { createAnalytics } from './analytics'

export const analytics = createAnalytics({
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  enabled: import.meta.env.PROD && ['infortac.com', 'www.infortac.com'].includes(window.location.hostname),
  browserWindow: window,
  browserDocument: document,
})

export const CONSENT_KEY = 'infortac-analytics-consent'

export function readConsent() {
  try {
    const saved = localStorage.getItem(CONSENT_KEY)
    return ['granted', 'denied'].includes(saved) ? saved : null
  } catch {
    return null
  }
}
