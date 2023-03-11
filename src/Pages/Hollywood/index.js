import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar'
import Hollylist from './HollyList/Hollylist'
import HollyRight from './Hollyright/Hollyright'

function Hollywood() {
  return (
    <div>
      <Navbar/>
      <div className="mainbox">
        <div className="leftbox">
        <Hollylist/>
        </div>
        <div className="rightbox">
          <HollyRight/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hollywood;
