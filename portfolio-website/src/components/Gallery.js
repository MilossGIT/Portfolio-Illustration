import React, { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images
function importAll(r) {
  return r.keys().map(r);
}

// Shuffle function for randomizing array order
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Import all images from the images directory and shuffle them
const allImages = importAll(
  require.context('../images', false, /\.(jpg|JPG)$/i)
).map((src, index) => ({
  id: index + 1,
  src: src,
  title: `Illustration ${index + 1}`,
}));

// Shuffle the images so they appear in random order each visit
const images = shuffleArray(allImages);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const navigateImage = useCallback(
    (direction) => {
      if (!selectedImage) return;

      const currentIndex = images.findIndex(
        (img) => img.id === selectedImage.id
      );
      let newIndex;

      if (direction === 'next') {
        newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      }

      setSelectedImage(images[newIndex]);
    },
    [selectedImage]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'Escape':
          setSelectedImage(null);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, navigateImage]);

  // Prevent context menu
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('contextmenu', preventDefault);
    return () => document.removeEventListener('contextmenu', preventDefault);
  }, []);

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
    <section id='gallery' className='py-20 section-gradient'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-medium mb-4 font-poppins tracking-tight'>My Work</h2>
          <p className='text-gray-600 max-w-2xl mx-auto font-inter'>
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
                className='relative group cursor-pointer overflow-hidden glass-card hover-lift image-overlay'
                onClick={() => setSelectedImage(image)}
              >
                <div className='aspect-w-4 aspect-h-3'>
                  <img
                    src={image.src}
                    alt={image.title}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none'
                    loading='lazy'
                    draggable='false'
                    onContextMenu={(e) => e.preventDefault()}
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

              {/* Navigation buttons */}
              <button
                className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 transition-colors p-2'
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft size={40} />
              </button>

              <button
                className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 transition-colors p-2'
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight size={40} />
              </button>

              <m.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className='max-h-[90vh] max-w-[90vw] object-contain rounded-lg pointer-events-none'
                draggable='false'
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Image counter */}
              <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full'>
                {images.findIndex((img) => img.id === selectedImage.id) + 1} /{' '}
                {images.length}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
