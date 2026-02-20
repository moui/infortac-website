export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Infortac</h3>
            <p className="mt-3 text-sm text-primary-200 leading-relaxed max-w-xs">
              Soluciones integrales para empresas de transporte de carga y pasajeros. Análisis de tacógrafos, control de flotas y productos DML.
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
                { label: 'Servicios', href: '#servicios' },
                { label: 'Productos', href: '#productos' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
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
                <a href="tel:+59826827509" className="hover:text-white transition-colors">
                  (+598) 2682-7509
                </a>
              </p>
              <p>
                <a href="mailto:infortac@adinet.com.uy" className="hover:text-white transition-colors">
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
