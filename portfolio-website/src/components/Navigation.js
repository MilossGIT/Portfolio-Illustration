import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import signatureLogo from '../hector/signature-on-white.png';

const navLinkClass =
  ({ isActive }) =>
  `relative px-5 py-2 text-sm font-light transition-colors ${
    isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
  }`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const menuItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/books', label: 'Books' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='fixed w-full z-50 bg-[#FFFFFF]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center gap-2 sm:gap-3 py-3 sm:py-[0.9rem]'>
          <Link
            to='/'
            className='flex items-center min-w-0 flex-1 pr-1 outline-none ring-offset-0 md:flex-none md:shrink-0 md:w-auto md:max-w-[34rem] lg:max-w-[38rem] md:pr-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 focus-visible:ring-offset-0'
            aria-label='Home'
          >
            {/* Tight crop + slight scale clips residual soft PNG edges (not CSS drop-shadow). */}
            <span className='inline-flex h-12 max-h-12 max-w-full items-center overflow-hidden md:h-[4.75rem] md:max-h-[4.75rem] lg:h-[5.125rem] lg:max-h-[5.125rem]'>
              <img
                src={signatureLogo}
                alt='Mina Sesek Minic'
                style={{ filter: 'none' }}
                className='block h-full w-auto max-w-none origin-left scale-[1.04] border-0 bg-white object-contain object-left shadow-none outline-none ring-0 transition-opacity hover:opacity-90 [backface-visibility:hidden]'
                draggable={false}
                decoding='async'
              />
            </span>
          </Link>

          <div className='hidden md:flex items-center space-x-1 shrink-0'>
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full' />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            className='md:hidden shrink-0 p-2 text-gray-700 hover:text-pink-500 transition-colors'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden border-t border-gray-100 py-4'>
            <div className='space-y-1'>
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-3 text-base font-light transition-colors ${
                      isActive
                        ? 'text-pink-500 bg-pink-50'
                        : 'text-gray-700 hover:text-pink-500 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
