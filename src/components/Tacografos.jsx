import { FileText, ShieldCheck, Gauge, AlertTriangle } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const TACH_DATA = [
  'Distancia recorrida por el vehículo',
  'Velocidad promedio y máxima alcanzada',
  'Aceleraciones bruscas',
  'Frenadas repentinas',
  'Tiempo de ralentí (motor en marcha, vehículo detenido)',
  'Tiempos de descanso e interrupciones del conductor',
]

export default function Tacografos() {
  const ref = useFadeIn()

  return (
    <section id="tacografos" className="py-20 sm:py-28 bg-primary-950 text-white" aria-labelledby="tacografos-title">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-accent-500 bg-accent-500/10 rounded-full border border-accent-500/20">
              ¿Qué es un tacógrafo?
            </span>
            <h2 id="tacografos-title" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              El instrumento clave para el control del transporte
            </h2>
            <p className="mt-5 text-primary-200 leading-relaxed text-base sm:text-lg">
              El tacógrafo es un dispositivo de registro obligatorio instalado en camiones y ómnibus que registra de forma continua la actividad del vehículo y su conductor. Es la fuente de datos más confiable para fiscalizar el cumplimiento normativo y optimizar la operación de una flota.
            </p>
            <p className="mt-4 text-primary-300 leading-relaxed">
              Los datos se graban en discos de tacógrafo (analógicos) o en tarjetas digitales, y su lectura profesional permite detectar irregularidades, mejorar hábitos de conducción y reducir costos operativos.
            </p>

            {/* Data list */}
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Datos que registra un tacógrafo:
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {TACH_DATA.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-primary-200">
                  <Gauge size={14} className="text-accent-500 mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500/15 text-accent-500 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Obligatoriedad legal (MTOP)</h3>
                  <p className="mt-2 text-sm text-primary-300 leading-relaxed">
                    Según la normativa del Ministerio de Transporte y Obras Públicas (MTOP) de Uruguay, todos los camiones y ómnibus habilitados para el transporte de carga y pasajeros están obligados a llevar tacógrafo en funcionamiento. Su uso no es opcional: es un requisito legal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-400/15 text-primary-300 rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Seguridad vial y prevención</h3>
                  <p className="mt-2 text-sm text-primary-300 leading-relaxed">
                    La información del tacógrafo está directamente vinculada a la seguridad vial: permite verificar que los conductores respeten los límites de velocidad, cumplan con los descansos reglamentarios y operen el vehículo de forma responsable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-400/15 text-primary-300 rounded-lg flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Valor documental y probatorio</h3>
                  <p className="mt-2 text-sm text-primary-300 leading-relaxed">
                    Los discos de tacógrafo constituyen prueba documental válida en caso de accidentes de tránsito, inspecciones del MTOP y juicios laborales. Contar con discos correctamente analizados y archivados es una protección para su empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tacógrafo image */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="/images/tacografos.png"
            alt="Diferentes modelos de tacógrafos analógicos y digitales utilizados en el transporte de carga"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
