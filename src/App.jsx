import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { captureSource } from './lib/source.js'
import Book from './pages/Book.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import AIAssistant from './components/AIAssistant.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Reviews from './pages/Reviews.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { search } = useLocation()
  useEffect(() => {
    captureSource(search)
  }, [search])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <AIAssistant />
    </div>
  )
}
