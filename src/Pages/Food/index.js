import React from 'react'
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import FoodLeft from './Left/FoodLeft';
import FoodList from './Right/FoodList';


function Food() {
  return (
    <div>
      <Navbar/>
      <div className="mainbox">
        <div className="leftbox">
        <FoodLeft/>
        </div>
        <div className="rightbox">
        <FoodList/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Food;
