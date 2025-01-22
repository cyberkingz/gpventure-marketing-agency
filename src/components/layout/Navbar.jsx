import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const targetId = sectionId === '' ? 'hero' : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    let sectionId = href.split('#')[1] || '';
    
    if (!isHomePage) {
      // If we're not on the home page, navigate to home first
      await navigate('/');
      // Wait for a brief moment to ensure the home page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/#hero" 
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="text-2xl font-bold text-white"
            >
              GP Ventures
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
