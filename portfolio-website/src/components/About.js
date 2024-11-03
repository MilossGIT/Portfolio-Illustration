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

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='relative group'>
              <img
                src={aboutImage}
                alt='Mina Sesek Minic'
                className='rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent' />
            </div>

            <div className='space-y-6'>
              <p className='text-lg text-gray-600'>
                Hello! I'm Mina, an illustrator with a deep love for creating
                art that captivates young minds and sparks joy. For over a
                decade, my journey has been dedicated to crafting whimsical
                illustrations, primarily focused on children's books and
                playful, story-rich art.
              </p>

              <p className='text-lg text-gray-600'>
                My work is inspired by the boundless imagination of childhood,
                nature’s beauty, and folklore's timeless charm. I believe each
                piece should weave a story, engage the senses, and create a
                sense of wonder that resonates with both children and the young
                at heart.
              </p>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Skills & Expertise
                </h3>
                <ul className='grid grid-cols-2 gap-4'>
                  {[
                    'Digital Illustration',
                    'Character Design',
                    'Book Illustration',
                    'Editorial Design',
                  ].map((skill) => (
                    <li key={skill} className='flex items-center space-x-2'>
                      <span className='w-2 h-2 bg-pink-500 rounded-full' />
                      <span className='text-gray-700'>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pt-6 border-t border-gray-200'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                  Find me on
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://www.behance.net/miminart'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-pink-500 hover:text-pink-600 transition-colors'
                  >
                    Behance
                  </a>
                  <a
                    href='https://www.instagram.com/misemillustration/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-pink-500 hover:text-pink-600 transition-colors'
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
