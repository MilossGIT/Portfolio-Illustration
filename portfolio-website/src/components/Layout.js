import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout() {
  return (
    <div className='flex min-h-full flex-col bg-gray-50'>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
