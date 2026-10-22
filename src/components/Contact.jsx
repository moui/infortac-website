import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'
import { buildContactUrl } from '../lib/contact'
import { analytics } from '../lib/siteAnalytics'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    channel: 'map',
    value: 'Río de Janeiro M. 124 S. 4, Lagomar, Canelones, Uruguay. CP 15100',
    href: 'https://maps.google.com/?q=-34.8381361,-55.9833471',
  },
  {
    icon: Phone,
    label: 'Celular',
    channel: 'whatsapp',
    value: '(+598) 94-562-495',
    href: 'https://wa.me/59894562495',
  },
  {
    icon: Mail,
    label: 'Email',
    channel: 'email',
    value: 'infortac@adinet.com.uy',
    href: 'mailto:infortac@adinet.com.uy',
  },
]

export default function Contact() {
  const ref = useFadeIn()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [handoff, setHandoff] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const channel = e.nativeEvent.submitter?.value || 'email'
    analytics.track('contact_click', { channel, placement: 'contact' })
    setHandoff(channel === 'whatsapp'
      ? 'Continuá en WhatsApp y presioná enviar para completar tu consulta.'
      : 'Revisá el borrador en tu aplicación de correo y presioná enviar. Si no se abre, usá la opción de WhatsApp.')
    const url = buildContactUrl(form, channel)
    if (channel === 'whatsapp') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
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
            {CONTACT_INFO.map(({ icon: Icon, label, value, href, channel }) => (
              <div key={label + value} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      data-analytics-event="contact_click"
                      data-channel={channel}
                      data-placement="contact"
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
            <form onSubmit={handleSubmit} aria-describedby="contact-help" className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <p id="contact-help" className="mb-6 text-sm text-gray-600">
                Prepará tu consulta y elegí cómo enviarla. Se abrirá tu aplicación de correo o WhatsApp con el mensaje listo para revisar y enviar.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
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
                    autoComplete="tel"
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
                  autoComplete="email"
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
                  placeholder="Contanos cómo podemos ayudarte: consultas sobre servicios, pedidos de discos de tacógrafo..."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  value="email"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <Mail size={18} />
                  Abrir correo
                </button>
                <button
                  type="submit"
                  value="whatsapp"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-700 border border-primary-200 font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle size={18} />
                  Abrir WhatsApp
                </button>
              </div>
              <p role="status" className="mt-4 text-sm text-gray-600">{handoff}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
