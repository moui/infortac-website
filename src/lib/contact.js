export function buildContactUrl(form, channel = 'email') {
  const message = `Nombre: ${form.name.trim()}\nTeléfono: ${form.phone.trim()}\nEmail: ${form.email.trim()}\n\nMensaje:\n${form.message.trim()}`

  if (channel === 'whatsapp') {
    return `https://wa.me/59894562495?text=${encodeURIComponent(message)}`
  }

  const subject = encodeURIComponent('Consulta desde la web - Infortac')
  return `mailto:infortac@adinet.com.uy?subject=${subject}&body=${encodeURIComponent(message)}`
}
