import React from 'react';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-herbal-green text-herbal-bg py-12 px-8 text-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="footer-col">
            <img 
              src="/AyurSage logo design.png" 
              alt="AyurSage logo" 
              className="h-20 mb-4"
            />
            <p className="text-gray-200">
              AyurSage brings India's ancient herbal wisdom to life through interactive learning, 
              guided tours, and trusted expert advice.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="mb-3 text-golden font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#dravya-darshan" className="text-herbal-bg hover:text-golden transition-colors">DravyaDarshan</a></li>
              <li><a href="#vanaspati-yatra" className="text-herbal-bg hover:text-golden transition-colors">VanaspatiYatra</a></li>
              <li><a href="#arogya-sutra" className="text-herbal-bg hover:text-golden transition-colors">ArogyaSutra</a></li>
              <li><a href="#sasya-kosha" className="text-herbal-bg hover:text-golden transition-colors">SasyaKosha</a></li>
              <li><a href="#vaidya-setu" className="text-herbal-bg hover:text-golden transition-colors">VaidyaSetu</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="footer-col">
            <h4 className="mb-3 text-golden font-semibold">Contact Us</h4>
            <div className="space-y-2 mb-4">
              <p>Email: <a href="mailto:info@ayursage.com" className="text-herbal-bg hover:text-golden transition-colors">info@ayursage.com</a></p>
              <p>Phone: <a href="tel:+916395615241" className="text-herbal-bg hover:text-golden transition-colors">+91 6395615241</a></p>
              <p className="text-gray-200">123 Herbal Lane, Agra, UP, India</p>
            </div>
            <h4 className="mb-3 text-golden font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy.html" className="text-herbal-bg hover:text-golden transition-colors">Privacy Policy</a></li>
              <li><a href="/terms.html" className="text-herbal-bg hover:text-golden transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="footer-col">
            <h4 className="mb-3 text-golden font-semibold">Stay Connected</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                required
                className="flex-1 px-3 py-2 border-none rounded text-gray-800"
              />
              <button 
                type="submit"
                className="bg-golden border-none px-4 py-2 rounded cursor-pointer text-gray-800 hover:bg-yellow-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a href="https://facebook.com/ayursage" target="_blank" rel="noopener" className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                  alt="Facebook" 
                  className="footer-social-icon"
                />
                <span className="text-xs">Facebook</span>
              </a>
              <a href="https://instagram.com/ayursage" target="_blank" rel="noopener" className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                  alt="Instagram" 
                  className="footer-social-icon"
                />
                <span className="text-xs">Instagram</span>
              </a>
              <a href="https://x.com/ayursage" target="_blank" rel="noopener" className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" 
                  alt="X" 
                  className="footer-social-icon"
                />
                <span className="text-xs">X.com</span>
              </a>
              <a href="https://youtube.com/ayursage" target="_blank" rel="noopener" className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                  alt="YouTube" 
                  className="footer-social-icon"
                />
                <span className="text-xs">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-herbal-light mt-8 pt-4 text-center text-xs">
          <p>© 2025 AyurSage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;