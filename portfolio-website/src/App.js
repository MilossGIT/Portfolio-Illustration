import React from 'react';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { LazyMotion, domAnimation } from 'framer-motion';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className='min-h-screen bg-gray-50 overflow-x-hidden'>
        <Navigation />

        {/* Hero Section with gradient background */}
        <section
          id='home'
          className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-pink-50 pt-16'
        >
          <div className='text-center px-4'>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-800 mb-6'>
              Mina Sesek Minic
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Illustrator & Visual Storyteller
            </p>
            <button
              onClick={() =>
                document
                  .getElementById('gallery')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='bg-pink-500 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition-colors transform hover:scale-105'
            >
              View My Work
            </button>
          </div>
        </section>

        {/* Main Content */}
        <main>
          <Gallery />
          <About />
          <Contact />
        </main>

        {/* Footer */}
        <footer className='bg-gray-800 text-white py-8'>
          <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Contact</h3>
              <p>Email: minasesek@gmail.com</p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Follow Me</h3>
              <div className='space-x-4'>
                <a
                  href='https://www.behance.net/miminart'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-pink-400 transition-colors'
                >
                  Behance
                </a>
                <a
                  href='https://www.instagram.com/misemillustration/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-pink-400 transition-colors'
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Location</h3>
              <p>Slovenia</p>
            </div>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}

export default App;
