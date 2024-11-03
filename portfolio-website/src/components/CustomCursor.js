import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = (e) => {
      if (e.relatedTarget === null) {
        setIsVisible(false);
      }
    };

    const handleMouseOver = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"], .hoverable, .nav-link'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <m.div
        className='fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference'
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          opacity: { duration: 0.15 },
        }}
      >
        <div className='w-4 h-4 bg-white rounded-full' />
      </m.div>
      <m.div
        className='fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference'
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          opacity: { duration: 0.15 },
        }}
      >
        <div className='w-8 h-8 border-2 border-white rounded-full opacity-50' />
      </m.div>
    </>
  );
};

export default CustomCursor;
