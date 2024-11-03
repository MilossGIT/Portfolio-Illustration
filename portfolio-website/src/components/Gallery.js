import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const imageFiles = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Object.entries(imageFiles).map(([filename, src], index) => ({
    id: index + 1,
    src: src,
    title: `Illustration ${index + 1}`,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id='gallery' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4'>My Work</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            A collection of my illustrations and digital artworks
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {images.map((image) => (
            <m.div
              key={image.id}
              variants={itemVariants}
              layoutId={`image-${image.id}`}
              onClick={() => setSelectedImage(image)}
              className='cursor-pointer group relative overflow-hidden rounded-lg shadow-lg bg-white'
              whileHover={{ scale: 1.02 }}
            >
              <div className='aspect-w-4 aspect-h-3'>
                <img
                  src={image.src}
                  alt={image.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center'>
                  <p className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold px-4 text-center'>
                    Click to view
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        <AnimatePresence>
          {selectedImage && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4'
              onClick={() => setSelectedImage(null)}
            >
              <button
                className='absolute top-4 right-4 text-white text-4xl hover:text-pink-500 transition-colors'
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <m.img
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.src}
                alt={selectedImage.title}
                className='max-h-[90vh] max-w-[90vw] object-contain rounded-lg'
              />

              <div className='absolute bottom-4 left-0 right-0 text-center'>
                <p className='text-white text-sm'>Click anywhere to close</p>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
