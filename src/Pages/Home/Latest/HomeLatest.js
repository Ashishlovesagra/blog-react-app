import React, { useContext } from 'react';
import { content } from '../../../Data/DataApi';
import './style.css';
import { Link } from 'react-router-dom';

function HomeLatest() {
    const [data] = useContext(content);

    const filterdata = data.filter((item) => item.category === 'bollywood');

    const itemToshow = filterdata.slice(0,3);
  return (
    <>
    <div className="homeLatest">
        <h1 className='lastesth1bolly'>Latest Bollywood</h1>
        <hr />
        <div className="home-latestBox">
            {itemToshow.map((item) => (
                <>
                <div key={item.id} className="Latest-item-box">
                    <div className="latest-img">
                        <Link to={`/article/${item.id}`}>
                        <img className='inside-latest-img' src={item.image} alt="" width="380px" height="250px"/>
                        </Link>
                        
                    </div>
                    <div className="latest-content">
                        <div className="latest-bolly-name">{item.name}</div>
                        <div className="latest-bolly-detail">{item.content}</div>
                        <div className="latest-bolly-date">{item.release}</div>
                    </div>
                    <div className="blankSpace"></div>
                </div>
                
                </>
            ))}
                
        </div>
        <br />
        <br />

    </div>
    </>
  )
}

export default HomeLatest;
