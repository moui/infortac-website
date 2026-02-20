import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Tacografos from './components/Tacografos'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tacografos />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
