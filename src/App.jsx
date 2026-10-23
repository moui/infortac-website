import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Tacografos from './components/Tacografos'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnalyticsConsent from './components/AnalyticsConsent'
import ServicePage from './components/ServicePage'
import NotFound from './components/NotFound'
import { getPage } from './data/pages'

export default function App({ path = '/' }) {
  const page = getPage(path)
  const isHome = page?.path === '/'
  return (
    <div className="min-h-screen bg-white">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-primary-900">
        Saltar al contenido
      </a>
      <Navbar isHome={isHome} />
      <main id="contenido" tabIndex={-1}>
        {isHome ? <>
        <Hero />
        <Services />
        <Tacografos />
        <Products />
        <About />
        </> : page ? <ServicePage page={page} /> : <NotFound />}
        {page && <Contact />}
      </main>
      <Footer isHome={isHome} />
      <AnalyticsConsent />
    </div>
  )
}
