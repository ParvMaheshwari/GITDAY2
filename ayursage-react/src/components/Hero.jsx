import React from 'react';

const Hero = ({ onExploreClick }) => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-black text-center px-8"
      style={{
        backgroundImage: `url('/ayursage-hero-background.jpg')`
      }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Discover the Healing Power of Nature
      </h2>
      <p className="text-lg mb-6 max-w-2xl">
        Interactive learning about India's ancient herbal wisdom, anytime, anywhere.
      </p>
      <button 
        onClick={onExploreClick}
        className="bg-green-600 text-white px-6 py-3 rounded border-none cursor-pointer hover:bg-green-700 transition-colors"
      >
        Explore Now
      </button>
    </section>
  );
};

export default Hero;