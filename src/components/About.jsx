import { Target, Eye as Vision, Award } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const TEAM = [
  {
    name: 'Pablo Barrera',
    role: 'Director y Responsable Técnico',
    description:
      'Más de 35 años de experiencia en transporte de pasajeros y carga. Trabajó en reconocidas empresas como ONDA y UCM antes de fundar Infortac hace más de 25 años.',
    image: null,
  },
  {
    name: 'Gonzalo Barrera',
    role: 'Administración',
    description: 'Responsable del área contable y administrativa de la empresa.',
    image: null,
  },
  {
    name: 'Mauricio Barrera',
    role: 'Informática',
    description: 'Responsable del área informática y tecnológica de la empresa.',
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
    <section id="nosotros" className="py-20 sm:py-28 bg-gray-50">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Nosotros
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Una empresa familiar con valores
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Hace más de 25 años que acompañamos a las empresas de transporte, brindando productos y servicios de calidad centrados en agregar valor real a su operación.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Misión</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Brindar productos y servicios de calidad a las empresas de transporte de carga y pasajeros. Agregar valor y entregar información oportuna y relevante, para que nuestro servicio sea una inversión, no un gasto.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-accent-500/10 text-accent-600 rounded-xl flex items-center justify-center mb-5">
              <Vision size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Visión</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Ser líderes en la prestación de servicios para empresas de transporte, sin relegar nunca la calidad. Alcanzar los mejores resultados posibles, beneficiando a nuestros clientes y proveedores por igual.
            </p>
          </div>
        </div>

        {/* About Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/images/infortac1.jpg"
              alt="Infortac - Oficina"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h3>
            <ul className="space-y-4">
              {[
                'Más de 35 años de experiencia en el rubro del transporte.',
                'Bajo perfil y absoluta discreción en el manejo de información.',
                'Fiscalización externa, sin contacto con los choferes.',
                'Indicadores útiles para la gestión empresarial.',
                'Reportes periódicos personalizados.',
                'Reducción de costos comprobada en el manejo de flotas.',
                'Soporte para certificaciones de calidad (UNIT, OEC).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Award size={18} className="text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Nuestro equipo
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, description, image }) => (
              <div
                key={name}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-primary-100 mx-auto mb-5 overflow-hidden flex items-center justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
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
            Confían en nosotros
          </h3>
          <p className="text-center text-gray-500 mb-10">
            Algunas de las empresas con las que hemos trabajado
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {CLIENTS.map(({ name, logo }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow aspect-square"
              >
                <img
                  src={logo}
                  alt={name}
                  className="max-h-16 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
