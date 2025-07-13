import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/ayursage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ayursage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
    {
      name: "X.com",
      url: "https://x.com/ayursage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/ayursage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
    }
  ]

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted')
  }

  return (
    <footer className="bg-green-900 text-green-50 p-8">
      <div className="flex flex-wrap gap-8 justify-between max-w-7xl mx-auto">
        {/* About */}
        <div className="flex-1 min-w-48">
          <img 
            src="/AyurSage-logo-design.png" 
            alt="AyurSage logo" 
            className="h-20 mb-4"
          />
          <p className="text-sm">
            AyurSage brings India's ancient herbal wisdom to life through interactive learning, guided tours, and trusted expert advice.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-48">
          <h4 className="text-yellow-400 mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#dravya-darshan" className="hover:text-yellow-400 transition-colors">DravyaDarshan</a></li>
            <li><a href="#vanaspati-yatra" className="hover:text-yellow-400 transition-colors">VanaspatiYatra</a></li>
            <li><a href="#arogya-sutra" className="hover:text-yellow-400 transition-colors">ArogyaSutra</a></li>
            <li><a href="#sasya-kosha" className="hover:text-yellow-400 transition-colors">SasyaKosha</a></li>
            <li><a href="#vaidya-setu" className="hover:text-yellow-400 transition-colors">VaidyaSetu</a></li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className="flex-1 min-w-48">
          <h4 className="text-yellow-400 mb-4 font-semibold">Contact Us</h4>
          <p className="text-sm mb-2">
            Email: <a href="mailto:info@ayursage.com" className="hover:text-yellow-400">info@ayursage.com</a>
          </p>
          <p className="text-sm mb-2">
            Phone: <a href="tel:+916395615241" className="hover:text-yellow-400">+91 6395615241</a>
          </p>
          <p className="text-sm mb-4">123 Herbal Lane, Agra, UP, India</p>
          
          <h4 className="text-yellow-400 mb-4 font-semibold">Legal</h4>
          <ul className="space-y-2">
            <li><a href="/privacy.html" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms.html" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="flex-1 min-w-48">
          <h4 className="text-yellow-400 mb-4 font-semibold">Stay Connected</h4>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              required
              className="flex-1 px-3 py-2 rounded border-none text-gray-800"
            />
            <button 
              type="submit"
              className="bg-yellow-400 text-green-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center text-sm hover:scale-105 transition-transform"
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="social-icon"
                />
                <span className="block">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-green-700 text-xs">
        <p>© 2025 AyurSage. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer