import React from 'react';
import { Button } from '../ui/button';

const AboutSection = ({ title, description, cta, image }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-6">
                {paragraph}
              </p>
            ))}
            <Button
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => window.location.href = cta.link}
            >
              {cta.text}
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src={image.src}
                alt={image.alt}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
