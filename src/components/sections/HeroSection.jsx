import React from 'react';
import { Button } from '../ui/button';

const HeroSection = ({ title, subtitle, cta }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {subtitle}
        </p>
        <Button
          className="bg-white text-blue-600 px-8 py-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          onClick={() => window.location.href = cta.link}
        >
          {cta.text}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
