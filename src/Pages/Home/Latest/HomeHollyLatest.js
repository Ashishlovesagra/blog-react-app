import React, { useContext } from 'react';
import { content } from '../../../Data/DataApi';
import { Link } from 'react-router-dom';
import "./style.css";

function HomeHollyLatest() {
    const [data] = useContext(content);

    const filterdata = data.filter((item) => item.category === 'food');

    const itemToshow = filterdata.slice(0,3);
  return (
    <>
    <div className="homeLatest">
        <h1>Food</h1>
        <hr />
        <div className="home-latestBox">
            {itemToshow.map((item) => (
                <div key={item.id} className="Latest-item-box">
                    <div className="latest-img">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} alt="" width="380px" height="250px"/>
                        </Link>
                    </div>
                    <div className="latest-content">
                        <div className="latest-bolly-name">{item.name}</div>
                        <div className="latest-bolly-detail">{item.content}</div>
                        <div className="latest-bolly-date">{item.release}</div>
                    </div>
                </div>
            ))}
                
        </div>
        <br />
        <br />

    </div>
    </>
  )
}

export default HomeHollyLatest;
