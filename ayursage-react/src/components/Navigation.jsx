import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-green-700 py-4 px-4" role="navigation" aria-label="Main navigation">
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => scrollToSection('digestive')}
          className="text-white font-bold hover:text-green-300 transition-colors duration-200"
        >
          Digestive Health
        </button>
        <button 
          onClick={() => scrollToSection('stress')}
          className="text-white font-bold hover:text-green-300 transition-colors duration-200"
        >
          Stress Relief
        </button>
        <button 
          onClick={() => scrollToSection('immune')}
          className="text-white font-bold hover:text-green-300 transition-colors duration-200"
        >
          Immune Support
        </button>
        <button 
          onClick={() => scrollToSection('skin')}
          className="text-white font-bold hover:text-green-300 transition-colors duration-200"
        >
          Skin Health
        </button>
      </div>
    </nav>
  );
};

export default Navigation;