import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/about.jpg';

const AboutSection = ({ title, subtitle, description, cta }) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Shown first on mobile */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="About GP Venture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Content - Shown second on mobile */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
            <p className="text-xl text-gray-400 mb-6">{subtitle}</p>
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index} className="text-gray-400 mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-400 mb-6">{description}</p>
            )}
            {cta && (
              <a
                href={cta.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {cta.text}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
