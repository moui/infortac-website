import { PAGES } from '../data/pages'
import Products from './Products'

export default function ServicePage({ page }) {
  return (
    <>
      <section id="inicio" className="bg-primary-950 text-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-primary-200">
            <a href="/" className="underline underline-offset-4 hover:text-white">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{page.label}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{page.heading}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-100">{page.intro}</p>
          <a href="#contacto" data-analytics-event="cta_click" data-action={page.catalog ? 'request_products' : 'request_quote'} data-placement="hero" className="mt-8 inline-block rounded-xl bg-accent-500 px-7 py-3 font-semibold text-primary-950 hover:bg-accent-600">
            {page.catalog ? 'Consultar por productos' : 'Consultar por este servicio'}
          </a>
        </div>
      </section>
      <section id="servicios" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {page.sections.map(({ title, text }) => (
          <div key={title}>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">{text}</p>
          </div>
        ))}
        {page.steps && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Cómo empezar</h2>
            <ol className="mt-4 list-decimal pl-6 space-y-3 text-gray-600">
              {page.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        )}
      </section>
      {page.catalog && <Products showCatalogLink={false} />}
      <section className="bg-gray-50 py-16" aria-labelledby="faq-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="faq-title" className="text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-4">
            {page.faq.map(({ question, answer }) => (
              <details key={question} className="rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-gray-900">{question}</summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
          <h2 className="mt-12 text-xl font-bold text-gray-900">Otras soluciones de Infortac</h2>
          <ul className="mt-4 space-y-3">
            {PAGES.filter((other) => other.path !== page.path).map((other) => (
              <li key={other.path}><a href={other.path} className="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-900">{other.heading}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
