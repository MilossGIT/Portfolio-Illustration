import React from 'react';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white'
    >
      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto text-center'
        >
          {/* Main Name with Staggered Animation */}
          <m.div className='relative mb-8'>
            <m.h1
              className='text-6xl md:text-8xl font-medium font-poppins tracking-tight relative z-10 text-gray-900'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <m.span
                className='inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Mina
              </m.span>
              <br />
              <m.span
                className='inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Sesek Minic
              </m.span>
            </m.h1>
          </m.div>

          {/* Subtitle with Typewriter Effect */}
          <m.div
            className='mb-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <m.p className='text-2xl md:text-3xl text-gray-600 font-inter font-light tracking-wide relative'>
              <m.span
                className='inline-block'
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 1.0, duration: 1.0, ease: "easeOut" }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                Illustrator & Visual Storyteller
              </m.span>
              <m.span
                className='inline-block w-0.5 h-8 bg-pink-500 ml-1'
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 2.0 }}
              />
            </m.p>

            {/* Decorative line */}
            <m.div
              className='w-24 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4'
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            />
          </m.div>

          {/* Enhanced Button */}
          <m.div
            className='flex justify-center gap-4'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
          >
            <m.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('gallery')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300'
            >
              <span className='flex items-center gap-2'>
                View My Work
                <m.span
                  className='inline-block'
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </m.span>
              </span>
            </m.button>
          </m.div>
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
