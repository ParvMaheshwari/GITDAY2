import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-900 text-white px-8 py-4">
      <img 
        src="/AyurSage-logo-design.png" 
        className="h-20 w-auto object-contain mr-24" 
        alt="AyurSage logo"
      />
      
      <ul className="flex gap-12 list-none">
        <li>
          <a href="index.html" className="nav-link">DravyaDarshan</a>
        </li>
        <li>
          <a href="#vanaspati-yatra" className="nav-link">VanaspatiYatra</a>
        </li>
        <li>
          <a href="arogyasutra.html" className="nav-link">ArogyaSutra</a>
        </li>
        <li>
          <a href="#sasya-kosha" className="nav-link">SasyaKosha</a>
        </li>
        <li>
          <a href="#VaidyaBodh" className="consult-link">VaidyaBodh</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar