import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-800 text-white text-center py-8 relative">
      <img 
        src="/images/placeholder.svg" 
        className="absolute top-4 left-4 w-30 h-16 z-10 bg-white rounded shadow-md" 
        alt="AyurSage logo" 
      />
      <h1 className="text-4xl font-bold m-0">ArogyaSutra</h1>
      <p className="text-lg mt-2">Natural Solutions for Common Health Problems</p>
    </header>
  );
};

export default Header;