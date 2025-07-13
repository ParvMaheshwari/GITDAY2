import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlantCarousel from './components/PlantCarousel'
import Footer from './components/Footer'
import WelcomeModal from './components/WelcomeModal'

function App() {
  const [showModal, setShowModal] = useState(true)

  const scrollToExplore = () => {
    const target = document.getElementById("explore")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onExploreClick={scrollToExplore} />
      
      <main id="explore">
        <PlantCarousel />
      </main>
      
      <Footer />
      
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
