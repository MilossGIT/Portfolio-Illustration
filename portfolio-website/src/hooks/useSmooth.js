import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href')?.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', smoothScroll));

    return () =>
      links.forEach((link) => link.removeEventListener('click', smoothScroll));
  }, []);
};
