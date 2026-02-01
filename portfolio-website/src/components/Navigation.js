import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        ? 'bg-white/95 backdrop-blur-md shadow-md'
        : 'bg-white/90 backdrop-blur-sm'
        }`}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div
            className='text-2xl font-bold cursor-pointer font-poppins text-gray-900 hover:text-pink-500 transition-colors'
            onClick={() => scrollToSection('home')}
          >
            Mina
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-1'>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors ${activeSection === item.id
                  ? 'text-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full' />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden border-t border-gray-100 py-4'>
            <div className='space-y-1'>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors ${activeSection === item.id
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-500 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
