import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

// Import all images
function importAll(r) {
  return r.keys().map(r);
}

// Import all images from the images directory
const images = importAll(require.context('../images', false, /\.(jpg)$/)).map(
  (src, index) => ({
    id: index + 1,
    src: src,
    title: `Illustration ${index + 1}`,
  })
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

        {images.length > 0 && (
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
                className='relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white'
                onClick={() => setSelectedImage(image)}
              >
                <div className='aspect-w-4 aspect-h-3'>
                  <img
                    src={image.src}
                    alt={image.title}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center'>
                    <p className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold px-4 text-center'>
                      Click to view
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black bg-opacity-90 z-50 p-4 flex items-center justify-center'
              onClick={() => setSelectedImage(null)}
            >
              <button
                className='absolute top-4 right-4 text-white text-4xl hover:text-pink-500 transition-colors'
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>

              <m.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className='max-h-[90vh] max-w-[90vw] object-contain rounded-lg'
              />
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
