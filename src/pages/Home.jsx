import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import { 
  Laptop, 
  BarChart, 
  Smartphone, 
  Globe, 
  Search, 
  MessageSquare 
} from 'lucide-react';

const Home = () => {
  const heroContent = {
    title: "Transform Your Digital Presence",
    subtitle: "We help businesses grow through innovative digital solutions",
    cta: {
      text: "Get Started",
      link: "#contact"
    }
  };

  const servicesContent = {
    title: "Our Services",
    subtitle: "Comprehensive digital solutions to help your business thrive",
    items: [
      {
        title: "Web Development",
        description: "Custom web applications built with cutting-edge technologies to drive your business forward.",
        icon: Laptop
      },
      {
        title: "Digital Marketing",
        description: "Data-driven marketing strategies to increase your online presence and drive growth.",
        icon: BarChart
      },
      {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        icon: Smartphone
      },
      {
        title: "Brand Strategy",
        description: "Comprehensive brand development and positioning to help you stand out in the market.",
        icon: Globe
      },
      {
        title: "SEO Optimization",
        description: "Advanced SEO techniques to improve your search rankings and online visibility.",
        icon: Search
      },
      {
        title: "Social Media",
        description: "Strategic social media management to build and engage your online community.",
        icon: MessageSquare
      }
    ]
  };

  const aboutContent = {
    title: "About GP Venture",
    description: [
      "We are a forward-thinking digital agency dedicated to helping businesses thrive in the digital age. With our expertise in technology and marketing, we create innovative solutions that drive growth and success.",
      "Our team of experts combines creativity with technical excellence to deliver exceptional results for our clients. We believe in building long-term partnerships and helping our clients stay ahead in the ever-evolving digital landscape."
    ],
    cta: {
      text: "Learn More",
      link: "#about"
    },
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
      alt: "Team working together"
    }
  };

  const portfolioContent = {
    title: "Our Portfolio",
    subtitle: "Explore some of our recent projects and success stories",
    items: [
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management."
      },
      {
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800",
        title: "Mobile Banking App",
        category: "Mobile Development",
        description: "A secure and user-friendly mobile banking application with advanced transaction features."
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800",
        title: "Digital Marketing Campaign",
        category: "Marketing",
        description: "Comprehensive digital marketing campaign that increased client revenue by 150%."
      },
      {
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800",
        title: "Brand Identity Design",
        category: "Branding",
        description: "Complete brand identity redesign for a leading technology company."
      },
      {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
        title: "SEO Optimization",
        category: "Digital Marketing",
        description: "SEO strategy that resulted in 200% increase in organic traffic within 6 months."
      },
      {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
        title: "Analytics Dashboard",
        category: "Web Development",
        description: "Custom analytics dashboard providing real-time insights and data visualization."
      }
    ]
  };

  return (
    <main className="flex-grow">
      <HeroSection {...heroContent} />
      <ServicesSection {...servicesContent} />
      <AboutSection {...aboutContent} />
      <PortfolioSection {...portfolioContent} />
    </main>
  );
};

export default Home;
