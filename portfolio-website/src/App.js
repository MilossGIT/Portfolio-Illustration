import React, { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import { useSmoothScroll } from './hooks/useSmooth';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <PageLoader key='loader' />
        ) : (
          <>
            <CustomCursor />
            <div className='min-h-screen bg-gray-50'>
              <Navigation />
              <main className='pt-16'>
                <Hero />
                <Gallery />
                <About />
                <Contact />
              </main>
            </div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default App;
