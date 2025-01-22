import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero.png';

const HeroSection = ({ title, subtitle, cta }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-24 lg:pt-0 pb-12 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-last order-first"
          >
            <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
              {/* Main image */}
              <img
                src={heroImage}
                alt="GP Venture Hero"
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border border-gray-800/50"
              />
              
              {/* Floating elements - Only show on desktop */}
              <div className="absolute -left-8 top-1/4 bg-blue-600/10 backdrop-blur-sm p-4 rounded-xl border border-blue-400/20 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 hover:border-blue-400/40 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  <span className="text-blue-400 font-medium drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">Live Projects</span>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-purple-600/10 backdrop-blur-sm p-4 rounded-xl border border-purple-400/20 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300 hover:border-purple-400/40 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                  <span className="text-purple-400 font-medium drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Background decorative elements - Only show on desktop */}
            <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl hidden lg:block"></div>
            <div className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl hidden lg:block"></div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:order-first order-last"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-blue-400 font-semibold text-lg mb-4 block">Welcome to GP Venture</span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
                  onClick={() => window.location.href = cta.link}
                >
                  {cta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div>
                <h4 className="text-3xl font-bold text-blue-400">100+</h4>
                <p className="text-gray-400 mt-1">Projects Done</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-400">50+</h4>
                <p className="text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-400">5+</h4>
                <p className="text-gray-400 mt-1">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
