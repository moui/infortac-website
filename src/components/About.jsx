import { Target, Eye as Vision, Award } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const TEAM = [
  {
    name: 'Pablo Barrera',
    role: 'Director y Responsable Técnico',
    description:
      'Con más de 40 años dedicados al transporte de pasajeros y carga, Pablo fundó Infortac tras una destacada carrera en empresas como ONDA y UCM. Su experiencia es la base de cada análisis que realizamos.',
    image: null,
  },
  {
    name: 'Gonzalo Barrera',
    role: 'Administración y Contabilidad',
    description: 'Responsable de la gestión administrativa y contable, asegurando que cada proceso funcione con eficiencia y transparencia.',
    image: null,
  },
  {
    name: 'Mauricio Barrera',
    role: 'Tecnología e Informática',
    description: 'A cargo del desarrollo tecnológico y la infraestructura digital de la empresa, integrando herramientas modernas al servicio del cliente.',
    image: '/images/mbarrera.jpg',
  },
]

const CLIENTS = [
  { name: 'CUT', logo: '/images/logo-cut.jpg' },
  { name: 'DUCSA', logo: '/images/logo-ducsa.jpg' },
  { name: 'PALEO', logo: '/images/logo-paleo.jpg' },
  { name: 'Petrobras', logo: '/images/logo-pb.jpg' },
  { name: 'COPAY', logo: '/images/logo-copay.png' },
  { name: 'Linde', logo: '/images/logo-linde.jpg' },
]

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
          <h2 id="nosotros-title" className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Una empresa familiar, un compromiso profesional
          </h2>
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

        {/* About Image + Text */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-20">
          <div>
            <img
              src="/images/infortac1.jpg"
              alt="Equipo de trabajo de Infortac analizando discos de tacógrafo"
              className="rounded-2xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué confiar en Infortac?
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Más de 40 años de trayectoria ininterrumpida en el rubro.',
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

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            El equipo detrás de Infortac
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {TEAM.map(({ name, role, description, image }) => (
              <div
                key={name}
                className="text-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-primary-100 mx-auto mb-5 overflow-hidden flex items-center justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt={`${name} — ${role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-primary-600">
                      {name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{name}</h4>
                <p className="text-sm text-primary-600 font-medium">{role}</p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Empresas que confían en nosotros
          </h3>
          <p className="text-center text-gray-500 mb-10 text-sm sm:text-base">
            Algunas de las compañías que han confiado en nuestros servicios a lo largo de los años
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 items-center">
            {CLIENTS.map(({ name, logo }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-3 sm:p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow aspect-square"
              >
                <img
                  src={logo}
                  alt={`Logo de ${name}`}
                  className="max-h-12 sm:max-h-16 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
