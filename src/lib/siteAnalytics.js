import { createAnalytics } from './analytics'

export const analytics = createAnalytics({
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  enabled: import.meta.env.PROD && typeof window !== 'undefined' && ['infortac.uy', 'www.infortac.uy', 'infortac.com.uy', 'www.infortac.com.uy'].includes(window.location.hostname),
  browserWindow: typeof window !== 'undefined' ? window : undefined,
  browserDocument: typeof document !== 'undefined' ? document : undefined,
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
