import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Río de Janeiro M. 124 S. 4, Lagomar, Canelones, Uruguay. CP 15100',
    href: 'https://maps.google.com/?q=-34.8381361,-55.9833471',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '(+598) 2682-7509',
    href: 'tel:+59826827509',
  },
  {
    icon: Phone,
    label: 'Celular',
    value: '(+598) 94-562-495',
    href: 'tel:+59894562495',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'infortac@adinet.com.uy',
    href: 'mailto:infortac@adinet.com.uy',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Viernes: 9:00 – 17:00',
    href: null,
  },
]

export default function Contact() {
  const ref = useFadeIn()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Consulta desde la web - Infortac')
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nTeléfono: ${form.phone}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    )
    globalThis.location.href = `mailto:infortac@adinet.com.uy?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white" aria-labelledby="contacto-title">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-100 rounded-full">
            Contacto
          </span>
          <h2 id="contacto-title" className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Estamos para ayudarte
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            ¿Consultas sobre análisis de tacógrafos, control de flota o productos DML? Escribínos y te respondemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label + value} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-900">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Ubicación Infortac"
                width="100%"
                height="250"
                src="https://maps.google.com/maps?hl=es&amp;ie=UTF8&amp;ll=-34.8381361,-55.9833471&amp;spn=0.05,0.05&amp;t=m&amp;z=14&amp;output=embed"
                className="w-full border-0 overflow-hidden"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-900"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-gray-900"
                  placeholder="Contanos cómo podemos ayudarte: consultas sobre servicios, pedidos de discos de tacógrafo, papel térmico..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-700/30 transition-all duration-200"
              >
                <Send size={18} />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
