import React from 'react'
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar';
import HomeLatest from './Latest/HomeLatest';
import HomeLatestArticle from './Latest/HomeLatestArticle';
import HomeTechLatest from './Latest/HomeTechLatest';
import HomeTopRight from './Latest/HomeTopRight';
import Poster from './Poster';
import "./style.css";

function Home() {
  return (
    <div>
      <Navbar/>
      <Poster/>
      <HomeLatest />
       <HomeTechLatest/>
      <div className="homeContainer">
        <div className="lefthomebox">
        <HomeLatestArticle/>
        </div>
        <div className="righthomebox">
          <HomeTopRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
