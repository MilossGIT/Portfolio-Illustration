import React, { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import bookHectorImg from '../hector/book_hector.jpg';

const RETAILERS = [
  {
    href: 'https://www.amazon.com/Trouble-Hector-Bonnie-Denmark/dp/B0GSSLG3HF',
    label: 'Amazon',
  },
  {
    href: 'https://www.kobo.com/us/en/ebook/the-trouble-with-hector-1',
    label: 'Kobo',
  },
  {
    href:
      'https://www.booksamillion.com/p/Trouble-Hector/Bonnie-Denmark/9798892661843',
    label: 'Books-A-Million',
  },
  {
    href:
      'https://www.barnesandnoble.com/w/the-trouble-with-hector-bonnie-denmark/1149447847',
    label: 'Barnes & Noble',
  },
];

function RetailerBuyPicker() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);

  const selected = RETAILERS[selectedIndex] ?? RETAILERS[0];

  const scrollSlideIntoView = (i) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[i];
    if (!container || !slide) {
      setSelectedIndex(i);
      return;
    }
    const pad = (container.clientWidth - slide.offsetWidth) / 2;
    container.scrollTo({
      left: slide.offsetLeft - pad,
      behavior: 'smooth',
    });
    setSelectedIndex(i);
  };

  useEffect(() => {
    let io;
    let rafOuter;
    let rafInner;
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      const container = scrollRef.current;
      const slides = RETAILERS.map((_, i) => slideRefs.current[i]).filter(
        Boolean
      );
      if (!container || slides.length !== RETAILERS.length) return;

      io = new IntersectionObserver(
        (entries) => {
          let bestIdx = -1;
          let bestRatio = 0;
          for (const entry of entries) {
            const idxAttr = entry.target.getAttribute('data-slide-index');
            const idx =
              idxAttr !== null ? Number.parseInt(idxAttr, 10) : Number.NaN;
            if (
              Number.isNaN(idx) ||
              idx < 0 ||
              idx >= RETAILERS.length ||
              !entry.isIntersecting
            ) {
              continue;
            }
            if (
              entry.intersectionRatio >= 0.45 &&
              entry.intersectionRatio > bestRatio
            ) {
              bestRatio = entry.intersectionRatio;
              bestIdx = idx;
            }
          }
          if (bestIdx !== -1) setSelectedIndex(bestIdx);
        },
        {
          root: container,
          rootMargin: '0px',
          threshold: [0.4, 0.45, 0.55, 0.65],
        }
      );

      slides.forEach((el) => io.observe(el));
    };

    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(setup);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafOuter);
      if (typeof rafInner === 'number') cancelAnimationFrame(rafInner);
      io?.disconnect();
    };
  }, []);

  return (
    <div className='space-y-3 pt-2'>
      <p className='text-sm font-light text-gray-500 uppercase tracking-wide'>
        Where to buy
      </p>
      <p className='text-xs font-light text-gray-400 md:hidden'>
        Swipe sideways to choose a store, then tap Buy.
      </p>

      {/* Mobile: horizontal snap — swipe or tap dot to change store */}
      <div className='md:hidden'>
        <div
          ref={scrollRef}
          className='flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-4 scroll-pr-4 py-1 -mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
        >
          {RETAILERS.map((r, i) => (
            <button
              key={r.href}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              type='button'
              data-slide-index={i}
              onClick={() => scrollSlideIntoView(i)}
              className={`snap-center shrink-0 flex min-h-[52px] w-[min(82vw,300px)] max-w-[300px] items-center justify-center rounded-2xl border px-5 py-4 text-base font-light text-center transition-colors active:opacity-90 ${
                selectedIndex === i
                  ? 'border-[#DE6EA0] bg-[#DE6EA0]/12 ring-2 ring-[#DE6EA0]/35 text-gray-900'
                  : 'border-gray-200 bg-white text-gray-700 active:bg-gray-50'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <div
          className='flex justify-center gap-1.5 pt-3 sm:pt-4'
          role='tablist'
          aria-label='Choose bookstore'
        >
          {RETAILERS.map((r, i) => (
            <button
              type='button'
              key={`dot-${r.href}`}
              role='tab'
              aria-selected={selectedIndex === i}
              aria-label={r.label}
              onClick={() => scrollSlideIntoView(i)}
              className='flex min-h-[44px] min-w-[44px] items-center justify-center p-2 touch-manipulation'
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? 'w-8 bg-[#DE6EA0]'
                    : 'w-2.5 bg-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop / tablet: dropdown */}
      <div className='hidden md:block'>
        <label htmlFor='retailer-buy-select' className='sr-only'>
          Choose bookstore
        </label>
        <div className='relative max-w-xl'>
          <select
            id='retailer-buy-select'
            value={String(selectedIndex)}
            onChange={(e) =>
              setSelectedIndex(Number.parseInt(e.target.value, 10))
            }
            className='w-full appearance-none rounded-full border border-gray-300 bg-white px-5 py-3.5 pr-12 font-light text-gray-900 shadow-sm hover:border-gray-400 focus:border-[#DE6EA0] focus:outline-none focus:ring-2 focus:ring-[#DE6EA0]/25'
          >
            {RETAILERS.map((r, i) => (
              <option key={r.href} value={String(i)}>
                {r.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className='pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500'
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
      </div>

      {/* One CTA for the active retailer */}
      <m.a
        href={selected.href}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#DE6EA0] px-8 py-3.5 text-base font-light text-white shadow-lg transition-[box-shadow,background-color] hover:bg-[#BE5F8D] hover:shadow-xl sm:min-h-0 sm:w-fit sm:min-w-[12rem] md:max-w-xl md:w-full'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Buy on {selected.label}
        <ExternalLink className='h-4 w-4' strokeWidth={1.5} />
      </m.a>
    </div>
  );
}

function BooksPage() {
  return (
    <main className='min-h-screen bg-white pt-[5.75rem] pb-16 sm:pt-[6rem] md:pt-[6.375rem] lg:pt-[6.75rem]'>
      <div className='container mx-auto max-w-6xl px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14'
        >
          {/* First in DOM: shows on top on mobile; md:order-2 = right column on desktop */}
          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='flex min-h-0 w-full shrink-0 justify-center md:order-2'
          >
            <div className='relative isolate w-full max-w-md overflow-hidden rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-gray-200/80'>
              <img
                src={bookHectorImg}
                alt='The Trouble With Hector book cover illustration'
                className='relative z-[1] block h-auto w-full max-w-full align-top'
                loading='eager'
                decoding='async'
                draggable={false}
                sizes='(max-width: 768px) 100vw, 448px'
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </m.div>

          <div className='min-h-0 w-full space-y-6 md:order-1'>
            <p className='text-sm font-light uppercase tracking-wide text-pink-600'>
              Picture book
            </p>
            <h1 className='text-4xl font-light tracking-tight text-gray-900 md:text-5xl'>
              The Trouble With Hector
            </h1>
            <p className='text-lg font-light leading-relaxed text-gray-700'>
              A boy uses his savings to buy a lizard—or something like that—and
              gets much more than he bargained for. The boy and his new pet,
              Hector, form a fast bond, but when Hector goes to school for
              show-and-tell, the sparks really fly. After Hector&apos;s
              fire-breathing antics get him banished from school and home, he
              meets a new friend and discovers the taming power of love.
            </p>
            <p className='text-sm font-light text-gray-600'>
              Written by Bonnie Denmark · Illustrated by Mina Sesek Minic ·
              Publisher ·{' '}
              <a
                href='https://www.lawleypublishing.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-pink-600 underline hover:text-pink-700'
              >
                Lawley Publishing
              </a>
            </p>

            <RetailerBuyPicker />

            <p className='pt-2'>
              <Link
                to='/portfolio'
                className='text-sm font-light text-gray-600 underline-offset-4 hover:text-pink-600 hover:underline'
              >
                View illustration portfolio →
              </Link>
            </p>
          </div>
        </m.div>
      </div>
    </main>
  );
}

export default BooksPage;
