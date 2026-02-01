import React from 'react';
import { m } from 'framer-motion';

// About image hosted on Cloudinary
const aboutImage = 'https://res.cloudinary.com/dwerrhasa/image/upload/v1769940429/about_ke7was.jpg';

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
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-center mb-12 font-poppins tracking-tight text-gray-900'
          >
            About Me
          </m.h2>

          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <m.div
              className='sticky top-24'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className='overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img
                  src={aboutImage}
                  alt='Mina Sesek Minic'
                  className='w-full h-auto object-cover'
                  onContextMenu={(e) => e.preventDefault()}
                  draggable='false'
                  style={{
                    WebkitTouchCallout: 'none',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </m.div>

            <div className='space-y-4'>
              <div className='prose prose-lg'>
                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='text-base leading-relaxed font-inter text-gray-700'
                >
                  My name is Mina, an illustrator, engineer, and proud mom based
                  in Ljubljana, Slovenia. My journey has been anything but
                  linear—from studying journalism and culturology to venturing
                  into IT, and finally discovering my true passion in digital
                  illustration.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className='text-base leading-relaxed font-inter text-gray-700'
                >
                  My inspiration flows from the everyday magic of life—watching
                  my daughter explore the world, our shared moments reading
                  children's books, and our adventures in nature. These
                  experiences come alive in my illustrations, often featuring my
                  daughter, our dog Leya, and a mysterious bunny whose true
                  identity remains a playful family debate!
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className='text-base leading-relaxed font-inter text-gray-700'
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

              {/* Social Links */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className='pt-6 border-t border-gray-200'
              >
                <h3 className='text-xl font-bold text-gray-900 mb-4 font-poppins'>
                  Find my work on
                </h3>
                <div className='flex space-x-4'>
                  <m.a
                    href='https://www.behance.net/miminart'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-pink-500 transition-colors font-medium'
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Behance
                  </m.a>
                  <m.a
                    href='https://www.instagram.com/misemillustration/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-pink-500 transition-colors font-medium'
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Instagram
                  </m.a>
                </div>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
