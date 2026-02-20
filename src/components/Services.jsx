import { Disc3, Satellite, Eye, SlidersHorizontal } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const SERVICES = [
  {
    icon: Disc3,
    title: 'Análisis de Tacógrafos',
    description:
      'Lectura, procesamiento y análisis profesional de la información registrada en discos de tacógrafo. Verificamos el cumplimiento de normativas del MTOP e internas de su empresa, con absoluta discreción en el manejo de datos.',
    details: [
      'Distancia recorrida, velocidad promedio y máxima',
      'Aceleraciones y frenadas bruscas',
      'Tiempos de ralentí y descanso',
      'Fiscalización sin contacto con choferes',
    ],
  },
  {
    icon: Satellite,
    title: 'Control Satelital GPS',
    description:
      'Para empresas con sistemas de rastreo GPS, ofrecemos análisis eficaz de la información y procesamiento de datos orientado a extraer indicadores clave para la gestión, compatible con cualquier proveedor.',
    details: [
      'Análisis de rutas y recorridos',
      'Indicadores de eficiencia operativa',
      'Compatible con cualquier proveedor GPS',
      'Reportes periódicos personalizados',
    ],
  },
  {
    icon: Eye,
    title: 'Seguimiento Presencial',
    description:
      'Control presencial de flota con documentación completa que incluye video, imágenes y reportes detallados para una visión integral del desempeño de sus vehículos y conductores.',
    details: [
      'Documentación con video e imágenes',
      'Informes detallados de cada recorrido',
      'Verificación in situ del cumplimiento',
      'Evidencia para auditorías y reclamos',
    ],
  },
  {
    icon: SlidersHorizontal,
    title: 'Soluciones a Medida',
    description:
      'Diseñamos soluciones personalizadas adaptadas a las necesidades específicas de cada cliente, desde reportes customizados hasta integraciones con sus sistemas existentes de gestión de flotas.',
    details: [
      'Reportes a medida con la frecuencia que usted elija',
      'Integración con sistemas existentes',
      'Consultoría en gestión de flotas',
      'Soporte documental para certificaciones de calidad',
    ],
  },
]

export default function Services() {
  const ref = useFadeIn()

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gray-50">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Soluciones integrales para el transporte
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Más de 35 años de experiencia respaldando a las empresas de transporte de carga y pasajeros con servicios confiables y de alta calidad.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, details }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {description}
              </p>
              <ul className="mt-5 space-y-2">
                {details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '35+', label: 'Años de experiencia' },
            { value: '100%', label: 'Discreción garantizada' },
            { value: '24/7', label: 'Monitoreo disponible' },
            { value: '50+', label: 'Clientes satisfechos' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-600">
                {value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
