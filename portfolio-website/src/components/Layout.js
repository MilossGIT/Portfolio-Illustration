import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout() {
  return (
    <div className='bg-gray-50' style={{ minHeight: '100vh' }}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
