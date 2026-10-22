import { useEffect, useState } from 'react'
import { analytics, CONSENT_KEY, readConsent } from '../lib/siteAnalytics'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(readConsent)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    analytics.setConsent(consent === 'granted')
    if (!analytics.available || consent !== 'granted') return

    const onClick = (event) => {
      const element = event.target.closest?.('[data-analytics-event]')
      if (!element) return
      analytics.track(element.dataset.analyticsEvent, {
        section_id: element.dataset.section,
        placement: element.dataset.placement,
        action: element.dataset.action,
        channel: element.dataset.channel,
      })
    }
    document.addEventListener('click', onClick)

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          analytics.track('section_view', { section_id: entry.target.closest('section').id })
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.5 }) : null
    document.querySelectorAll('main section h1, main section h2').forEach((heading) => observer?.observe(heading))

    return () => {
      document.removeEventListener('click', onClick)
      observer?.disconnect()
    }
  }, [consent])

  function choose(value) {
    analytics.setConsent(value === 'granted')
    try { localStorage.setItem(CONSENT_KEY, value) } catch { /* Consent still works for this visit. */ }
    setConsent(value)
    setEditing(false)
  }

  if (!analytics.available) return null

  return (
    <>
      <div className="bg-primary-950 text-center pb-6">
        <button type="button" onClick={() => setEditing(true)} className="text-sm text-primary-200 underline underline-offset-4 hover:text-white">
          Preferencias de estadísticas
        </button>
      </div>
      {(consent === null || editing) && (
        <section aria-labelledby="analytics-title" className="fixed bottom-4 inset-x-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-5 shadow-xl max-h-[80dvh] overflow-y-auto">
          <h2 id="analytics-title" className="font-bold text-gray-900">Estadísticas del sitio</h2>
          <p className="mt-2 text-sm text-gray-600">
            Con tu permiso, usamos cookies de Google Analytics para medir visitas y clics y mejorar el sitio. No enviamos el contenido de tus consultas. Podés cambiar tu elección desde el pie de página.
          </p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary-700 underline">Privacidad de Google</a>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose('granted')} className="rounded-lg bg-primary-700 px-5 py-2.5 font-semibold text-white hover:bg-primary-800">Aceptar</button>
            <button type="button" onClick={() => choose('denied')} className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-800 hover:bg-gray-100">Rechazar</button>
          </div>
        </section>
      )}
    </>
  )
}
