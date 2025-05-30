import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import LoadingEnvelope from './components/public-components/loadingenvelope';
import PageTransitionWrapper from './components/public-components/pagetransitionwrapper';
import About from '../src/components/about-components/about'
import Contact from '../src/components/contact-conponents/contact'
import Remisu from '../src/components/remisu-components/resumi'
import { ThemeProvider } from './components/public-components/themeprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingEnvelope><AnimatePresence mode="wait"><Home /></AnimatePresence></LoadingEnvelope>} />
        <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
        <Route path="/contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
        <Route path="/remisu" element={<PageTransitionWrapper><Remisu /></PageTransitionWrapper>} />
      </Routes>
    </BrowserRouter>



  </ThemeProvider>

);

reportWebVitals();

