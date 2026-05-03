import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import signatureLogo from '../hector/signature.png';

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
            className='flex items-center min-w-0 flex-1 pr-1 sm:flex-none sm:pr-0 sm:max-w-[28rem] md:max-w-[34rem] lg:max-w-[38rem]'
            aria-label='Home'
          >
            <img
              src={signatureLogo}
              alt='Mina Sesek Minic'
              className='block h-12 w-auto max-w-full sm:h-[4.25rem] md:h-[4.75rem] lg:h-[5.125rem] object-contain object-left origin-left sm:max-w-[min(100%,22rem)] md:max-w-none scale-100 sm:scale-[1.08] md:scale-[1.05] lg:scale-100 hover:opacity-90 transition-opacity [filter:drop-shadow(0_1px_1px_rgb(0_0_0/0.1))]'
              draggable={false}
              decoding='async'
            />
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
