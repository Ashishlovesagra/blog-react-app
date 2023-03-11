import React, { useContext } from 'react';
import { content } from '../../../Data/DataApi';
import { Link } from 'react-router-dom';
import "./style.css";

function HomeTopRight() {
    const [data] = useContext(content);

    const filterdata = data.filter((item) => item.category === 'fitness');

    const itemToshow = filterdata.slice(0,1);
    const showItem = filterdata.slice(1,4)
  return (
    <>
    <div className="homeTopAdd"><span className='toppost-add'>Advertistement</span></div>
    <div className="homeTopRight">
        <h1 className='hometopposth1'>Top Posts</h1>
        <hr className='homeTopRighthr' />
        <div className="homeTopRightBox">
            {itemToshow.map((item) => (
                <div key={item.id} className="homeTopRight-item-box">
                    <div className="homeTopRight-img">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} className='homeTopRight-inside-img' alt="" width="452px" height="266px"/>
                        </Link>
                    </div>
                    <div className="homeTopRight-content">
                        <div className="homeTopRight-bolly-name">{item.name}</div>
                        <div className="homeTopRight-bolly-date">Time /{item.release}</div>
                    </div>
                </div>
            ))}
        <hr className='HomeTopRight-hr' />    
        </div>
        <div className="homeTopRightBoxlower">
            {showItem.map((item) => (
                <>
                <div key={item.id} className="homeTopRight-item-boxlower">
                    <div className="homeTopRight-imglower">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} alt="" width="101px" height="104px"/>
                        </Link>
                    </div>
                    <div className="homeTopRight-contentlower">
                        <div className="homeTopRight-bolly-namelower">{item.name}</div>
                        <div className="homeTopRight-bolly-datelower">Time /{item.release}</div>
                    </div>
                </div>
                <hr className='HomeTopRight-hr' />
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export default HomeTopRight;
