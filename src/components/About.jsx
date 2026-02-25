import { Target, Eye as Vision, Award } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-gray-50" aria-labelledby="nosotros-title">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Nosotros
          </span>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Hace más de 30 años que acompañamos a las empresas de transporte de Uruguay. Nacimos como un emprendimiento familiar y crecimos manteniendo lo que nos distingue: cercanía, confianza y un servicio de calidad.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Misión</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Ser el aliado estratégico de las empresas de transporte de carga y pasajeros, brindando servicios de análisis de tacógrafos e información de flota que se traduzcan en valor real: mejor toma de decisiones, menores costos y mayor seguridad.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-accent-500/10 text-accent-600 rounded-xl flex items-center justify-center mb-5">
              <Vision size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Visión</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Ser referencia en servicios de fiscalización y control para el transporte en Uruguay, manteniendo siempre la calidad del servicio por encima de todo. Crecer junto a nuestros clientes, generando relaciones duraderas basadas en resultados.
            </p>
          </div>
        </div>

        {/* Why trust us */}
        <div className="mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              ¿Por qué confiar en Infortac?
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Más de 35 años de trayectoria ininterrumpida en el rubro.',
                'Absoluta discreción y confidencialidad en el manejo de datos.',
                'Fiscalización externa: sin contacto directo con los choferes.',
                'Información procesada y convertida en indicadores de gestión.',
                'Reportes claros, periódicos y adaptados a su empresa.',
                'Ahorro demostrable en costos operativos de flota.',
                'Documentación compatible con certificaciones de calidad (UNIT, OEC).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Award size={18} className="text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
