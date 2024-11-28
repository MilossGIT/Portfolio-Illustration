import React from 'react';
import { m } from 'framer-motion';
import aboutImage from '../about.jpg';

const About = () => {
  return (
    <section id='about' className='py-20 bg-white min-h-screen'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>

          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div className='relative group sticky top-8'>
              <div className='overflow-hidden rounded-lg shadow-lg relative'>
                {/* Subtle pink border accent */}
                <div className='absolute inset-0 border border-pink-100 rounded-lg z-20'></div>

                {/* Protective overlay */}
                <div
                  className='absolute inset-0 z-10'
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    cursor: 'default',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                />

                {/* Main image with protection */}
                <img
                  src={aboutImage}
                  alt='Mina Sesek Minic'
                  className='w-full h-auto object-cover transition-all duration-300 group-hover:scale-105'
                  onContextMenu={(e) => e.preventDefault()}
                  draggable='false'
                  style={{
                    WebkitTouchCallout: 'none',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                />

                {/* Refined hover effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            </div>

            <div className='space-y-8'>
              <div className='prose prose-lg'>
                <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className='text-lg leading-relaxed'
                >
                  My name is Mina, an illustrator, engineer, and proud mom based
                  in Ljubljana, Slovenia. My journey has been anything but
                  linear—from studying journalism and culturology to venturing
                  into IT, and finally discovering my true passion in digital
                  illustration.
                </m.p>

                <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='text-lg leading-relaxed mt-6'
                >
                  My inspiration flows from the everyday magic of life—watching
                  my daughter explore the world, our shared moments reading
                  children's books, and our adventures in nature. These
                  experiences come alive in my illustrations, often featuring my
                  daughter, our dog Leya, and a mysterious bunny whose true
                  identity remains a playful family debate!
                </m.p>

                <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='text-lg leading-relaxed mt-6'
                >
                  From capturing the humorous reality of working from home (like
                  the time my daughter decided to become a hairdresser during my
                  meeting) to bringing to life the whimsical characters from her
                  stories, each illustration tells a unique tale. Even my
                  relatable "tired rat" series, showing the everyday moments of
                  cooking and laundry, reflects the beautiful chaos of balancing
                  family life.
                </m.p>
              </div>

              {/* Social Links with subtle styling */}
              <div className='pt-8 border-t border-pink-100'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                  Find my work on
                </h3>
                <div className='flex space-x-6'>
                  <a
                    href='https://www.behance.net/miminart'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-pink-500 transition-colors'
                  >
                    Behance
                  </a>
                  <a
                    href='https://www.instagram.com/misemillustration/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-pink-500 transition-colors'
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
