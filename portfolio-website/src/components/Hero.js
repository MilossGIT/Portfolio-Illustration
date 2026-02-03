import React from 'react';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative flex items-center justify-center bg-gradient-to-b from-white via-pink-50/30 to-white'
      style={{ minHeight: '100vh', touchAction: 'pan-y' }}
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
              onClick={() => {
                const gallery = document.getElementById('gallery');
                const isMobile = window.innerWidth < 1024; // Increased from 768 to include tablets

                // Ensure body can scroll
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';

                // Create cinematic overlay transition (for both mobile and desktop)
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  right: 0;
                  bottom: 0;
                  background: radial-gradient(circle at center, rgba(236, 72, 153, 1), rgba(168, 85, 247, 1));
                  z-index: 9999;
                  opacity: 0;
                  transition: opacity 0.6s ease-out;
                  pointer-events: none;
                  backdrop-filter: blur(20px);
                `;
                document.body.appendChild(overlay);

                // Add elegant icon/animation instead of text
                const loadingIcon = document.createElement('div');
                loadingIcon.style.cssText = `
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 10000;
                  opacity: 0;
                  transition: opacity 0.5s ease-in-out;
                  pointer-events: none;
                  text-align: center;
                `;
                loadingIcon.innerHTML = `
                  <div style="
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: pulse 2s ease-in-out infinite;
                    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);
                  ">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div style="
                    color: white;
                    font-size: 18px;
                    font-weight: 500;
                    font-family: 'Poppins', sans-serif;
                    letter-spacing: 1px;
                  ">
                    ✨
                  </div>
                `;
                document.body.appendChild(loadingIcon);

                // Add pulse animation
                const pulseStyle = document.createElement('style');
                pulseStyle.textContent = `
                  @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                  }
                `;
                document.head.appendChild(pulseStyle);

                // Create glitter particles (slower and more)
                const glitterCount = 40;
                const glitters = [];
                for (let i = 0; i < glitterCount; i++) {
                  const glitter = document.createElement('div');
                  const size = Math.random() * 5 + 2;
                  const startX = Math.random() * 100;
                  const startY = Math.random() * 100;
                  const duration = Math.random() * 3 + 2; // Slower: 2-5s instead of 1.5-4s
                  const delay = Math.random() * 0.8;

                  glitter.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: white;
                    border-radius: 50%;
                    left: ${startX}%;
                    top: ${startY}%;
                    opacity: 0;
                    box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
                    animation: glitterFloat ${duration}s ease-in-out ${delay}s forwards;
                    pointer-events: none;
                  `;
                  overlay.appendChild(glitter);
                  glitters.push(glitter);
                }

                // Add glitter animation
                const style = document.createElement('style');
                style.textContent = `
                  @keyframes glitterFloat {
                    0% { opacity: 0; transform: translate(0, 0) scale(0) rotate(0deg); }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { opacity: 0; transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5) rotate(360deg); }
                  }
                `;
                document.head.appendChild(style);

                // Fade in overlay
                requestAnimationFrame(() => {
                  overlay.style.opacity = '1';
                  // Fade in loading icon after overlay
                  setTimeout(() => {
                    loadingIcon.style.opacity = '1';
                  }, 300);
                });

                if (isMobile) {
                  // Simple approach: use native smooth scroll after overlay
                  setTimeout(() => {
                    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Fade out loading icon first
                    setTimeout(() => {
                      loadingIcon.style.opacity = '0';
                      setTimeout(() => {
                        if (document.body.contains(loadingIcon)) {
                          document.body.removeChild(loadingIcon);
                        }
                        // Then fade out overlay
                        overlay.style.opacity = '0';
                        setTimeout(() => {
                          if (document.body.contains(overlay)) {
                            document.body.removeChild(overlay);
                          }
                          if (document.head.contains(style)) {
                            document.head.removeChild(style);
                          }
                          if (document.head.contains(pulseStyle)) {
                            document.head.removeChild(pulseStyle);
                          }
                          // CRITICAL: Ensure body scroll is enabled
                          document.body.style.overflow = '';
                          document.body.style.position = '';
                          document.body.style.touchAction = '';
                        }, 400);
                      }, 200);
                    }, 800);
                  }, 800);
                } else {
                  // Desktop: loading delay, then smooth scroll with overlay
                  setTimeout(() => {
                    gallery.scrollIntoView({ behavior: 'smooth' });

                    // Fade out loading icon first
                    setTimeout(() => {
                      loadingIcon.style.opacity = '0';
                      setTimeout(() => {
                        document.body.removeChild(loadingIcon);
                        // Then fade out overlay after scroll
                        setTimeout(() => {
                          overlay.style.opacity = '0';
                          setTimeout(() => {
                            document.body.removeChild(overlay);
                            document.head.removeChild(style);
                            document.head.removeChild(pulseStyle);
                          }, 600);
                        }, 800);
                      }, 300);
                    }, 1000);
                  }, 1200); // Loading delay: 1200ms

                }
              }}
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
        className='absolute bottom-12 z-10'
        style={{ left: '50%', x: '-50%' }}
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
