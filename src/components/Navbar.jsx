import { useState, useRef, useSyncExternalStore } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Análisis de tacógrafos', href: '/analisis-de-tacografos/' },
  { label: 'Tacógrafos', href: '#tacografos' },
  { label: 'Discos DML y bobinas BVDR', href: '/discos-de-tacografo/' },
  { label: 'Análisis de datos GPS', href: '/analisis-de-datos-gps/' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function subscribeToScroll(callback) {
  window.addEventListener('scroll', callback, { passive: true })
  return () => window.removeEventListener('scroll', callback)
}

const getScrolled = () => window.scrollY > 50
const getServerScrolled = () => false

export default function Navbar({ isHome = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getServerScrolled) || !isHome
  const toggleRef = useRef(null)

  return (
    <nav
      aria-label="Navegación principal"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
          toggleRef.current?.focus()
        }
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href={isHome ? '#inicio' : '/'}
            data-analytics-event="navigation_click"
            data-section="inicio"
            data-placement="header"
            className={`text-2xl font-extrabold tracking-tight transition-colors ${
              scrolled ? 'text-primary-800' : 'text-white'
            }`}
          >
            Infortac
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href.startsWith('/') ? href : isHome ? href : `/${href}`}
                data-analytics-event="navigation_click"
                data-section={href.startsWith('/') ? undefined : href.slice(1)}
                data-placement="header"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
      >
        <div className="bg-white border-t border-gray-100 px-4 pb-4 pt-2 shadow-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href.startsWith('/') ? href : isHome ? href : `/${href}`}
              data-analytics-event="navigation_click"
              data-section={href.startsWith('/') ? undefined : href.slice(1)}
              data-placement="header"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
