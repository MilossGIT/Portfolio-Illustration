import React, { useState } from 'react';
import { m } from 'framer-motion';
import aboutImage from '../about.jpg';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [openSection, setOpenSection] = useState('intro');

  const sections = [
    {
      id: 'intro',
      title: 'Who I Am',
      content:
        "My name is Mina, and I am an illustrator, engineer, and proud mom based in Ljubljana, Slovenia. I've been drawing for as long as I can remember, but my path took a detour after studying journalism and culturology. Eventually, I ventured into the world of IT, and today I'm an engineer.",
    },
    {
      id: 'journey',
      title: 'My Digital Journey',
      content:
        "A year ago, I discovered digital illustration using Procreate, and although it was a completely new medium for me, I quickly immersed myself in learning. It took some time to adapt, but with dedication and practice, I've experimented with different styles and techniques. Now, I feel like I'm beginning to find my own unique voice.",
    },
    {
      id: 'inspiration',
      title: 'My Inspiration',
      content:
        "My main source of inspiration comes from everyday life—moments spent with my daughter, reading children's books together, and exploring the wonders of nature. Animals, particularly those from the woods and jungles, often appear in my work as well. The main character in many of my illustrations is my daughter, but our dog Leya and a mysterious bunny also make frequent appearances. The bunny's identity is still a mystery—our friends believe it represents my husband, but I'm still unsure!",
    },
    {
      id: 'stories',
      title: 'Real Life Stories',
      content:
        'I also love to draw from real-life moments, like the black-and-white illustrations that capture my experiences of working from home while caring for my daughter. One memorable piece illustrates the moment when my daughter cut her hair while I was in the middle of a meeting!',
    },
    {
      id: 'characters',
      title: 'My Characters',
      content:
        'Drawing rats is another thing I enjoy, as I often identify with the tired, smelly rat who cooks or does laundry. And sometimes, I bring to life the characters from the stories my daughter creates, like the adventurous girl and elephant in Wonderland.',
    },
    {
      id: 'future',
      title: 'Looking Forward',
      content:
        "I'm constantly experimenting with new ideas and techniques, excited to see how my work evolves and what new characters will emerge in my illustrations.",
    },
  ];

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
              <div className='overflow-hidden rounded-lg shadow-lg'>
                <img
                  src={aboutImage}
                  alt='Mina Sesek Minic'
                  className='w-full h-auto object-cover transition-all duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            </div>

            <div className='space-y-4'>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className='border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
                >
                  <button
                    onClick={() =>
                      setOpenSection(
                        openSection === section.id ? null : section.id
                      )
                    }
                    className={`w-full px-6 py-4 flex justify-between items-center transition-colors ${
                      openSection === section.id
                        ? 'bg-pink-50 text-pink-700'
                        : 'bg-white hover:bg-pink-50/50'
                    }`}
                  >
                    <h3 className='text-lg font-semibold'>{section.title}</h3>
                    {openSection === section.id ? (
                      <ChevronUp
                        className={`h-5 w-5 ${
                          openSection === section.id
                            ? 'text-pink-500'
                            : 'text-gray-500'
                        }`}
                      />
                    ) : (
                      <ChevronDown className='h-5 w-5 text-gray-500' />
                    )}
                  </button>

                  <m.div
                    initial={false}
                    animate={{
                      height: openSection === section.id ? 'auto' : 0,
                      opacity: openSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden bg-white'
                  >
                    <p className='px-6 py-4 text-gray-600 leading-relaxed border-t border-pink-100'>
                      {section.content}
                    </p>
                  </m.div>
                </div>
              ))}

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
