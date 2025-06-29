import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { m } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = ['home', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 shadow-lg backdrop-blur-sm border-b border-white/20'
        : 'bg-transparent'
        }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <m.div
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-medium text-pink-500 cursor-pointer font-poppins'
            onClick={() => scrollToSection('home')}
          >
            Mina
          </m.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8'>
            {menuItems.map((item) => (
              <m.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition-colors cursor-pointer px-4 py-2 rounded-full
                  ${activeSection === item.id
                    ? 'text-pink-500 font-medium'
                    : 'text-gray-600 hover:text-pink-500'
                  }`}
              >
                {item.label}
              </m.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <m.button
            whileTap={{ scale: 0.95 }}
            className='md:hidden cursor-pointer p-2'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </m.button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden glass-card transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'
            }`}
        >
          <div className='px-2 py-3 space-y-1'>
            {menuItems.map((item) => (
              <m.button
                key={item.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${activeSection === item.id
                    ? 'text-pink-500 bg-pink-50 font-medium'
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                  }`}
              >
                {item.label}
              </m.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
