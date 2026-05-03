import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout() {
  return (
    <div className='flex min-h-[100dvh] flex-col bg-gray-50'>
      <Navigation />
      <main className='relative z-0 w-full flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
