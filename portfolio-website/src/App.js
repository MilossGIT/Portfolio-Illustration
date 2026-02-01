import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { LazyMotion, domAnimation, m } from 'framer-motion';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='min-h-screen bg-gray-50 overflow-x-hidden'
      >
        <Navigation />
        <Hero />

        {/* Main Content */}
        <main>
          <Gallery />
          <About />
          <Contact />
        </main>

        {/* Footer */}
        <m.footer
          className='bg-gray-900 text-white py-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              {/* Contact Section */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className='text-center md:text-left'
              >
                <h3 className='text-xl font-bold mb-3 font-poppins flex items-center justify-center md:justify-start gap-2'>
                  <m.span
                    className='inline-block w-1.5 h-1.5 bg-pink-500 rounded-full'
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Contact
                </h3>
                <m.a
                  href='mailto:minasesek@gmail.com'
                  className='text-gray-400 hover:text-pink-400 transition-colors text-sm block'
                  whileHover={{ x: 3 }}
                >
                  minasesek@gmail.com
                </m.a>
              </m.div>

              {/* Follow Me Section */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='text-center'
              >
                <h3 className='text-xl font-bold mb-3 font-poppins flex items-center justify-center gap-2'>
                  <m.span
                    className='inline-block w-1.5 h-1.5 bg-purple-500 rounded-full'
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  Follow Me
                </h3>
                <div className='flex justify-center space-x-6 text-sm'>
                  <m.a
                    href='https://www.behance.net/miminart'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-pink-400 transition-colors'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Behance
                  </m.a>
                  <m.a
                    href='https://www.instagram.com/misemillustration/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-pink-400 transition-colors'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Instagram
                  </m.a>
                </div>
              </m.div>

              {/* Location Section */}
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center md:text-right'
              >
                <h3 className='text-xl font-bold mb-3 font-poppins flex items-center justify-center md:justify-end gap-2'>
                  <m.span
                    className='inline-block w-1.5 h-1.5 bg-blue-500 rounded-full'
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  Location
                </h3>
                <p className='text-gray-400 text-sm'>Ljubljana, Slovenia</p>
              </m.div>
            </div>

            {/* Divider */}
            <m.div
              className='w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            {/* Copyright */}
            <m.div
              className='text-center text-gray-500 text-sm'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>© {new Date().getFullYear()} Mina Sesek Minic. All rights reserved.</p>
            </m.div>
          </div>
        </m.footer>
      </m.div>
    </LazyMotion>
  );
}

export default App;
