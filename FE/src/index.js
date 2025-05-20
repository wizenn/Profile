import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/public-components/about';
import { AnimatePresence } from 'framer-motion';
import PageTransitionWrapper from './configs/pagetransitionwrapper';
import LoadingEnvelope from './configs/loadingEnvelope ';
import Contact from './components/public-components/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
        <Route path="/contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);


reportWebVitals();
