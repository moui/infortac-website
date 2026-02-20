import { Package, Truck } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const PRODUCTS = [
  {
    id: 'DML 001',
    name: 'Disco Diagrama 7 días',
    image: '/images/discos001.jpg',
    scale: '125 Km/h',
    divisions: '20×20 Km/h',
    application: 'Disco semanal de tacógrafo 125 Km/h',
    packaging: '10 conjuntos de 7 discos',
  },
  {
    id: 'DML 002',
    name: 'Disco Diagrama 24 horas',
    image: '/images/discos002.jpg',
    scale: '125 Km/h',
    divisions: '20×20 Km/h',
    application: 'Disco diario de tacógrafo 125 Km/h',
    packaging: '100 discos de 24 horas',
  },
  {
    id: 'DML 005',
    name: 'Disco Diagrama 24 horas',
    image: '/images/discos005.jpg',
    scale: '180 Km/h',
    divisions: '20×20 Km/h',
    application: 'Disco diario de tacógrafo 180 Km/h',
    packaging: '100 discos de 24 horas',
  },
  {
    id: 'DML 006',
    name: 'Disco Diagrama 7 días',
    image: '/images/discos006.jpg',
    scale: '180 Km/h',
    divisions: '20×20 Km/h',
    application: 'Disco semanal de tacógrafo 180 Km/h',
    packaging: '10 conjuntos de 7 discos',
  },
  {
    id: 'DML Papel Térmico',
    name: 'Rollos de papel térmico',
    image: '/images/papeles.jpg',
    scale: null,
    divisions: null,
    application: 'POS y todo tipo de tickets en general',
    packaging: 'Papel de alto rendimiento con garantía de calidad',
  },
]

export default function Products() {
  const ref = useFadeIn()

  return (
    <section id="productos" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Productos DML
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Distribuidor autorizado
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Comercializamos discos de tacógrafo y rollos de papel térmico de la reconocida marca DML, garantizando calidad y disponibilidad.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(({ id, name, image, scale, divisions, application, packaging }) => (
            <div
              key={id}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={image}
                  alt={id}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package size={16} className="text-primary-500" />
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    {id}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <p className="mt-2 text-sm text-gray-500">{application}</p>

                {scale && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-md">
                      Escala: {scale}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                      {divisions}
                    </span>
                  </div>
                )}

                <p className="mt-3 text-xs text-gray-400">{packaging}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-10 text-center text-white">
          <Truck className="mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-bold">¿Necesitás discos o papel térmico?</h3>
          <p className="mt-2 text-primary-100 max-w-lg mx-auto">
            Realizá tu pedido y coordiná el envío. <strong>Montevideo y Ciudad de la Costa: ¡envío gratis!</strong>
          </p>
          <a
            href="#contacto"
            className="inline-block mt-6 px-8 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  )
}
