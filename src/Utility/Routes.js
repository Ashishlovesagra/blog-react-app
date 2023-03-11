import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Bollywood from '../Pages/Bollywood';
import Technology from '../Pages/Technology';
import Hollywood from '../Pages/Hollywood';
import Fitness from '../Pages/Fitness';
import Food from '../Pages/Food';
import PageNotFound from './PageNotFound';
import Article from '../Pages/Article/Article';


function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Food" element={<Food />} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/article/:path" element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rout;

