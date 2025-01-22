import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    const sectionId = href.split('#')[1];
    if (!sectionId) return;

    if (!isHomePage) {
      await navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">GP Ventures FZCO</h3>
            <p className="text-sm">
              Building, A1,<br />
              Dubai Digital Park,<br />
              Dubai Silicon Oasis,<br />
              00000 Dubai, UAE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#hero" 
                  onClick={(e) => handleNavClick(e, '/#hero')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  onClick={(e) => handleNavClick(e, '/#services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@gpventures.ae" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@gpventures.ae
                </a>
              </li>
              <li>
                <a href="tel:+971123456789" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +971 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} GP Ventures FZCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
