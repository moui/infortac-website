export default function Footer({ isHome = true }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Infortac</h3>
            <p className="mt-3 text-sm text-primary-200 leading-relaxed max-w-xs">
              Especialistas en lectura y procesamiento de discos de tacógrafo, control de flotas, rastreo satelital y productos DML para el transporte en Uruguay.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Análisis de tacógrafos', href: '/analisis-de-tacografos/' },
                { label: 'Tacógrafos', href: '#tacografos' },
                { label: 'Discos DML y bobinas BVDR', href: '/discos-de-tacografo/' },
                { label: 'Análisis de datos GPS', href: '/analisis-de-datos-gps/' },
                { label: 'Informes de flotas', href: '/informes-de-flotas/' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href.startsWith('/') ? href : isHome ? href : `/${href}`}
                    data-analytics-event={href.startsWith('/') ? undefined : 'navigation_click'}
                    data-section={href.startsWith('/') ? undefined : href.slice(1)}
                    data-placement="footer"
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">
              Contacto
            </h4>
            <address className="not-italic text-sm text-primary-300 space-y-2">
              <p>Río de Janeiro M. 124 S. 4</p>
              <p>Lagomar, Canelones, Uruguay</p>
              <p>
                <a href="https://wa.me/59894562495" data-analytics-event="contact_click" data-channel="whatsapp" data-placement="footer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (+598) 94-562-495
                </a>
              </p>
              <p>
                <a href="mailto:infortac@adinet.com.uy" data-analytics-event="contact_click" data-channel="email" data-placement="footer" className="hover:text-white transition-colors">
                  infortac@adinet.com.uy
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-sm text-primary-400">
          <p>&copy; {currentYear} Infortac. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
