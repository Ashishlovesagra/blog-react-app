import React from 'react';
import './style.css';

function Poster() {
  return (
    <div>
      <div className="poster-main">
        <div className="posterleft">
            {/* <div className="firstPosterTitle">Manali Himachal Pradesh</div>
            <div className="firstPosterDate">Travel/ November 2022</div> */}
        </div>
        <div className="posterright">
            <div className="topPoster">
                {/* <div className="topPosterTitle">Nainital Uttarakhand</div>
                <div className="topPosterDate">Travel/ September 2022</div> */}
            </div>
            <div className="bottomPoster">
                {/* <div className="bottomPostTitle">Auli Uttarakhand</div>
                <div className="bottomPostDate">Travel/ January 2023</div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Poster;
