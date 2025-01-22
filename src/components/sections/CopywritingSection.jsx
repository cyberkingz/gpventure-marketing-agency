import React from 'react';
import { motion } from 'framer-motion';
import contentStrategyImage from '@assets/Content-Strategy.jpg';
import copywritingImage from '@assets/copywriting.jpg';

const ImageTextSection = ({ image, title, subtitle, description, features, isImageLeft = true }) => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative ${isImageLeft ? 'lg:order-first' : 'lg:order-last'}`}
          >
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border border-gray-800/50"
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-white ${isImageLeft ? 'lg:order-last' : 'lg:order-first'}`}
          >
            <span className="text-blue-400 font-semibold text-lg mb-4 block">{subtitle}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{description}</p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CopywritingSection = () => {
  return (
    <section className="bg-gray-900">
      {/* First Section - Image Left */}
      <ImageTextSection
        image={contentStrategyImage}
        title="Crafting Compelling Digital Narratives"
        subtitle="Content Strategy"
        description="We transform your brand's story into engaging digital experiences that resonate with your audience. Our expert copywriters blend creativity with strategic thinking to deliver content that drives results."
        features={[
          "SEO-optimized content that ranks",
          "Engaging storytelling that connects",
          "Brand voice development",
          "Content strategy planning"
        ]}
        isImageLeft={true}
      />

      {/* Second Section - Image Right */}
      <ImageTextSection
        image={copywritingImage}
        title="Converting Visitors into Customers"
        subtitle="Conversion Copywriting"
        description="Our conversion-focused copywriting turns your website visitors into loyal customers. We create persuasive content that speaks directly to your audience's needs and motivates action."
        features={[
          "Data-driven copy optimization",
          "Persuasive call-to-actions",
          "A/B testing for maximum impact",
          "User journey optimization"
        ]}
        isImageLeft={false}
      />
    </section>
  );
};

export default CopywritingSection;
