import React from 'react'
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import FitnessList from './Left/FitnessList';
import FitnessRightList from './Right/FitnessRightList';

function Fitness() {
  return (
    <div>
      <Navbar/>
      <div className="mainbox">
        <div className="leftbox">
        <FitnessList/>
        </div>
        <div className="rightbox">
        <FitnessRightList/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Fitness;
