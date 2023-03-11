import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import BollyList from './BollyList/BollyList';
import BollyRight from './BollyRight/BollyRight';
import './index.css';

function Bollywood() {
  return (
    <div>
      <Navbar/>
      <div className="mainbox">
        <div className="leftbox">
        <BollyList/>
        </div>
        <div className="rightbox">
        <BollyRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Bollywood;
