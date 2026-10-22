import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Tacografos from './components/Tacografos'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnalyticsConsent from './components/AnalyticsConsent'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-primary-900">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Services />
        <Tacografos />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <AnalyticsConsent />
    </div>
  )
}
