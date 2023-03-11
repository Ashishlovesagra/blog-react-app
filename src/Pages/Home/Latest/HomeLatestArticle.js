import React, { useContext } from 'react';
import { content } from '../../../Data/DataApi';
import { Link } from 'react-router-dom';
import "./style.css";

function HomeLatestArticle() {
    const [data] = useContext(content);

    const filterdata = data.filter((item) => item.category === 'technology');

    const itemToshow = filterdata.slice(0,1);
    const showItem = filterdata.slice(1,4)
  return (
    <>
    <div className="homeLatestArticle">
        <h1 className='articleh1'>Latest Article</h1>
        <hr className='homeArticlehr' />
        <div className="homeArticlelatestBox">
            {itemToshow.map((item) => (
                <div key={item.id} className="LatestArticle-item-box">
                    <div className="latestArticle-img">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} alt="" className='inside-latestArticle-img' width="308px" height="263px"/>
                        </Link>
                    </div>
                    <div className="latestArticle-content">
                        <div className="latestArticle-bolly-name">{item.name}</div>
                        <div className="latestArticle-bolly-detail">{item.content}</div>
                        <div className="latestArticle-bolly-date">Time /{item.release}</div>
                    </div>
                </div>
            ))}
        <hr className='latehr' />    
        </div>
        <div className="homeArticlelatestBoxlower">
            {showItem.map((item) => (
                <>
                <div key={item.id} className="LatestArticle-item-boxlower">
                    <div className="latestArticle-imglower">
                    <Link to={`/article/${item.id}`}>
                        <img src={item.image} className='inside-latestArticle-img2' alt="" width="308px" height="184px"/>
                        </Link>
                    </div>
                    <div className="latestArticle-contentlower">
                        <div className="latestArticle-bolly-namelower">{item.name}</div>
                        <div className="latestArticle-bolly-detaillower">{item.content}</div>
                        <div className="latestArticle-bolly-datelower">Time /{item.release}</div>
                    </div>
                </div>
                <hr className='latehr' />
                </>
            ))}
        </div>
        <div className="LatestpagePoster">
            
        </div>
    </div>
    </>
  )
}

export default HomeLatestArticle;
