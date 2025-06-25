import React from 'react';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-pink-50'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 opacity-20'>
          {[...Array(5)].map((_, i) => (
            <m.div
              key={i}
              className='absolute rounded-full bg-pink-300'
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto'
        >
          <h1 className='text-5xl md:text-7xl font-medium text-gray-800 mb-6 font-poppins tracking-tight'>
            Mina Sesek Minic
          </h1>

          <p className='text-xl md:text-2xl text-gray-600 mb-8 font-inter font-medium'>
            Illustrator & Visual Storyteller
          </p>

          <div className='flex justify-center gap-4'>
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('gallery')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors'
            >
              View My Work
            </m.button>
          </div>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className='w-6 h-10 border-2 border-pink-500 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-pink-500 rounded-full mt-2' />
        </div>
      </m.div>
    </section>
  );
};

export default Hero;
