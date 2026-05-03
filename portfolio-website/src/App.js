import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BooksPage from './pages/BooksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='portfolio' element={<PortfolioPage />} />
            <Route path='books' element={<BooksPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
