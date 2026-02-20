import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/slide1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-primary-900/70 to-primary-800/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20">
          Más de 35 años de experiencia
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Control de flotas y{' '}
          <span className="text-accent-500">tacógrafos</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Análisis de discos de tacógrafo, rastreo satelital e informes a medida
          para optimizar la gestión de su flota de transporte.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-600/30 transition-all duration-200 text-center"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 text-center"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
