import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import coverImage from '../hector/Cover_Page.jpg';

const AMAZON_BOOK =
  'https://www.amazon.com/Trouble-Hector-Bonnie-Denmark/dp/B0GSSLG3HF';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative overflow-x-hidden bg-white'
    >
      <div className='w-full pt-[5.75rem] sm:pt-[6rem] md:pt-[6.375rem] lg:pt-[6.75rem]'>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
          className='w-full'
        >
          <img
            src={coverImage}
            alt='The Trouble With Hector cover'
            className='block w-full max-w-[100vw] h-auto align-top'
            sizes='100vw'
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className='mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 text-center'
        >
          <p className='text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.22em] uppercase text-gray-500 font-light mb-3 sm:mb-4 leading-relaxed'>
            Mina Sesek Minic · Illustrator &amp; Visual Storyteller
          </p>

          <h1 className='text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight font-light leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-6 px-0.5'>
            The Trouble With Hector
          </h1>

          <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-left sm:text-center'>
            A boy uses his savings to buy a lizard—or something like that—and gets
            much more than he bargained for. The boy and his new pet, Hector,
            form a fast bond, but when Hector goes to school for show-and-tell,
            the sparks really fly. After Hector&apos;s fire-breathing antics get him
            banished from school and home, he meets a new friend and discovers the
            taming power of love.
          </p>

          <m.div
            className='flex flex-col gap-3 sm:gap-4 sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <m.div whileTap={{ scale: 0.98 }}>
              <Link
                to='/portfolio'
                className='inline-flex min-h-[48px] w-full sm:w-auto justify-center items-center rounded-full px-6 sm:px-8 py-3.5 bg-[#DE6EA0] text-white text-[0.95rem] sm:text-base font-light shadow-md active:bg-[#BE5F8D] sm:shadow-lg transition-[box-shadow,background-color] sm:hover:bg-[#BE5F8D] sm:hover:shadow-xl'
              >
                View Portfolio
              </Link>
            </m.div>
            <m.div whileTap={{ scale: 0.98 }}>
              <Link
                to='/books'
                className='inline-flex min-h-[48px] w-full sm:w-auto justify-center items-center rounded-full px-6 sm:px-8 py-3.5 border border-gray-300 text-gray-800 font-light bg-white text-[0.95rem] sm:text-base active:bg-gray-50 sm:hover:border-[#DE6EA0] sm:hover:text-[#9B456E] transition-colors'
              >
                About the book
              </Link>
            </m.div>
            <m.a
              href={AMAZON_BOOK}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-[48px] w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 sm:px-8 py-3.5 text-gray-800 font-light bg-gray-100 text-[0.95rem] sm:text-base active:bg-gray-200 sm:hover:bg-gray-200 transition-colors'
              whileTap={{ scale: 0.98 }}
            >
              Buy on Amazon
              <ExternalLink className='w-4 h-4 shrink-0' strokeWidth={1.5} />
            </m.a>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
