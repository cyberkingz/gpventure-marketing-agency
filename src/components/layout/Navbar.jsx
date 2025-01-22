import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'top-4' : 'top-0'
        }`}
      >
        <div className={`mx-auto max-w-[90%] ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-full' 
            : 'bg-transparent'
        } px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">GP Venture</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <Button>Contact Us</Button>
            </div>

            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
