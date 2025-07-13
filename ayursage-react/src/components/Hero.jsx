import React from 'react'

const Hero = ({ onExploreClick }) => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-black text-center p-8"
      style={{
        backgroundImage: "url('/ayursage-hero-background.jpg')"
      }}
    >
      <h2 className="text-5xl mb-4">Discover the Healing Power of Nature</h2>
      <p className="text-xl mb-4">
        Interactive learning about India's ancient herbal wisdom, anytime, anywhere.
      </p>
      <button 
        onClick={onExploreClick}
        className="hero-button"
      >
        Explore Now
      </button>
    </section>
  )
}

export default Hero