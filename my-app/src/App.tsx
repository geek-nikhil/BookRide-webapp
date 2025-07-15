import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Fleet from './pages/Fleet'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Services from './pages/Services'
import Terms from './pages/Terms'
// import ThankYou from './pages/thank-you'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/thank-you" element={<ThankYou />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
