import React from 'react'
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import TechList from './TechList/TechList';
import TechRight from './TechRight/TechRight';


function Technology() {
  return (
    <div>
      <Navbar/>
      <div className="mainbox">
        <div className="leftbox">
        <TechList/>
        </div>
        <div className="rightbox">
        <TechRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Technology;
