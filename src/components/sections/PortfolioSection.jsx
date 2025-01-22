import React from 'react';
import PortfolioCard from '../ui/PortfolioCard';

const PortfolioSection = ({ title, subtitle, items }) => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text">
            {title}
          </h2>
          <p className="text-xl text-gray-400">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
