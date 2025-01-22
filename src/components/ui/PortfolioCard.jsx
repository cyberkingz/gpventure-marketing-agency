import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ image, title, category, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <span className="text-sm text-blue-400 font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <button className="mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center group">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
