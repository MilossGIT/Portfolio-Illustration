import React from 'react';
import { m } from 'framer-motion';

const PageLoader = () => {
  return (
    <m.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-white'
    >
      <div className='relative w-24 h-24'>
        <m.div
          animate={{
            rotate: 360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 2, ease: 'linear', repeat: Infinity },
            scale: { duration: 1, repeat: Infinity },
          }}
          className='absolute inset-0 border-4 border-pink-500 rounded-full border-t-transparent'
        />
      </div>
    </m.div>
  );
};

export default PageLoader;
