import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlantCarousel from './components/PlantCarousel';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show welcome modal on component mount
    setShowModal(true);
  }, []);

  const scrollToExplore = () => {
    const target = document.getElementById("explore");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Welcome Modal */}
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      
      {/* Header */}
      <header>
        <Navbar />
        <Hero onExploreClick={scrollToExplore} />
      </header>

      {/* Main Content */}
      <main id="explore">
        <PlantCarousel />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
