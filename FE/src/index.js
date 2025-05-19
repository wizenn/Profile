import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/public-components/about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
