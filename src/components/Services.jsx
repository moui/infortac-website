import { Disc3, Satellite, Eye, SlidersHorizontal } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const SERVICES = [
  {
    icon: Disc3,
    title: 'Control y Procesamiento de Discos de Tacógrafo',
    description:
      'Nuestro servicio principal. Realizamos la lectura, procesamiento y análisis integral de los datos registrados en cada disco de tacógrafo. Verificamos el cumplimiento de las normativas del MTOP y las políticas internas de su empresa, con total confidencialidad.',
    details: [
      'Lectura profesional con más de 35 años de experiencia',
      'Distancia recorrida, velocidad promedio y máxima',
      'Detección de aceleraciones y frenadas bruscas',
      'Registro de tiempos de ralentí, descanso e interrupciones',
      'Fiscalización externa y discreta, sin contacto con choferes',
      'Archivo y resguardo organizado de discos para consultas futuras',
    ],
    highlighted: true,
  },
  {
    icon: Satellite,
    title: 'Análisis de Información Satelital',
    description:
      'Para empresas que cuentan con rastreo GPS, procesamos y analizamos la información de sus dispositivos para convertir datos crudos en indicadores claros y accionables, sin importar el proveedor del sistema.',
    details: [
      'Procesamiento de datos de cualquier proveedor GPS',
      'Análisis de rutas, paradas y desvíos',
      'Indicadores de eficiencia operativa y consumo',
      'Reportes periódicos con información relevante para la gestión',
    ],
    highlighted: false,
  },
  {
    icon: Eye,
    title: 'Seguimiento Presencial de Flota',
    description:
      'Control in situ del comportamiento de la flota, con documentación fotográfica y en video. Una herramienta valiosa para auditorías, resolución de reclamos y verificación del cumplimiento operativo.',
    details: [
      'Documentación con video e imágenes de cada recorrido',
      'Informes detallados de hallazgos y observaciones',
      'Verificación presencial de rutas y procedimientos',
      'Evidencia documental para auditorías y juicios laborales',
    ],
    highlighted: false,
  },
  {
    icon: SlidersHorizontal,
    title: 'Informes y Soluciones a Medida',
    description:
      'Cada empresa tiene necesidades distintas. Diseñamos reportes personalizados con la periodicidad y el nivel de detalle que su operación requiere, integrando datos de tacógrafos, GPS y seguimiento presencial.',
    details: [
      'Reportes con la frecuencia y formato que usted necesite',
      'Cruce de información entre múltiples fuentes de datos',
      'Soporte documental para certificaciones (UNIT, OEC)',
      'Consultoría experta en optimización de costos de flota',
    ],
    highlighted: false,
  },
]

export default function Services() {
  const ref = useFadeIn()

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gray-50" aria-labelledby="servicios-title">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Servicios
          </span>
          <h2 id="servicios-title" className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Fiscalización y control para el transporte
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Desde la lectura de un disco de tacógrafo hasta el análisis satelital de una flota completa, ofrecemos servicios pensados para que usted tome mejores decisiones y reduzca costos operativos.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, details, highlighted }) => (
            <div
              key={title}
              className={`group rounded-2xl p-8 shadow-sm hover:shadow-xl border transition-all duration-300 ${
                highlighted
                  ? 'bg-primary-50 border-primary-200 hover:border-primary-300 ring-1 ring-primary-100'
                  : 'bg-white border-gray-100 hover:border-primary-200'
              }`}
            >
              {highlighted && (
                <span className="inline-block mb-4 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-primary-600 text-white rounded-full">
                  Servicio principal
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                highlighted
                  ? 'bg-primary-600 text-white group-hover:bg-primary-700'
                  : 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
              }`}>
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '35+', label: 'Años de trayectoria' },
            { value: '100%', label: 'Confidencialidad' },
            { value: 'Semanal', label: 'Retiro de discos' },
            { value: '50+', label: 'Empresas atendidas' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-600">
                {value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
