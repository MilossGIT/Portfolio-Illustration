import React from 'react';
import { m } from 'framer-motion';
import { Instagram } from 'lucide-react';

const LAWLEY_LOGO_URL = 'https://www.lawleypublishing.com/images/Logo_Long.png';
const LAWLEY_SITE = 'https://www.lawleypublishing.com/';
const BEHANCE_URL = 'https://www.behance.net/miminart';
const INSTAGRAM_URL = 'https://www.instagram.com/misemillustration/';

function Footer() {
  return (
    <m.footer
      className='bg-gray-900 text-white py-12'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto px-4 max-w-5xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10'>
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className='text-center md:text-left'
          >
            <h3 className='text-lg font-light mb-3 flex items-center justify-center md:justify-start gap-2'>
              <m.span
                className='inline-block w-1.5 h-1.5 rounded-full bg-[#CB4430]'
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

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-center'
          >
            <h3 className='text-lg font-light mb-3 flex items-center justify-center gap-2'>
              <m.span
                className='inline-block w-1.5 h-1.5 rounded-full bg-[#2E89AE]'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              Where to find me
            </h3>
            <p className='text-gray-400 text-sm mb-4'>Ljubljana, Slovenia</p>
            <div className='flex justify-center items-center gap-6'>
              <m.a
                href={BEHANCE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-pink-400 transition-colors text-sm'
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Behance
              </m.a>
              <m.a
                href={INSTAGRAM_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-pink-400 transition-colors'
                aria-label='Instagram'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className='w-7 h-7 text-gray-500 hover:text-gray-300' strokeWidth={1.5} />
              </m.a>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-center md:text-right flex flex-col items-center md:items-end justify-start gap-2'
          >
            <h3 className='text-lg font-light mb-2 flex items-center justify-center md:justify-end gap-2 text-gray-100'>
              <m.span
                className='inline-block w-1.5 h-1.5 rounded-full bg-[#E49CC0]'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              Publisher
            </h3>
            <m.a
              href={LAWLEY_SITE}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-full max-w-[112px] sm:max-w-[120px]'
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={LAWLEY_LOGO_URL}
                alt='Lawley Publishing'
                className='w-full h-auto object-contain object-center opacity-85 hover:opacity-100 transition-opacity brightness-110'
              />
            </m.a>
          </m.div>
        </div>

        <m.div
          className='w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        <m.div
          className='text-center text-gray-500 text-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>All Images © 2026 Mina Sesek Minic</p>
        </m.div>
      </div>
    </m.footer>
  );
}

export default Footer;
