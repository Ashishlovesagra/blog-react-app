import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleNavbar from '../../Component/ArticleNavbar/ArticleNavbar';
import { content } from '../../Data/DataApi';
import Footer from '../../Component/Footer/Footer';
import './style.css';

function Article() {
  const [data] = useContext(content);
  var { path } = useParams();
  path = +path;
  var categor;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categor = data[i].category;
      break;
    }
  }
  console.log(typeof path);
  console.log(categor);

  return (
    <div >
      <ArticleNavbar/>
      {data.filter((value) => value.id === path).map((item) => (
        <>
        <div key={item.id} className='article-mainTop'>
          <div className="article-Name">
            <h2>{item.id} {item.name}</h2>
          </div>
          <div className="article-D-name">
            <div className="article-left">
              <img className="article-left-img" src={item.avatar} alt="" width={'80px'} />
            </div>
            <div className="article-right">
              <h3>{item.Dname}</h3>
              <h5>{item.release}</h5>
            </div>
          </div>
          <div className="article-img">
          <img className='inside-article-img' src={item.image} alt="" />
          </div>
          <div className="article-content">
            {item.content}
          </div>
          <div className="article-D-name">
            <div className="article-left">
              <img className="article-left-img" src={item.avatar} alt="" width={'80px'}/>
            </div>
            <div className="article-right">
              <h3>{item.Dname}</h3>
              <h5>{item.release}</h5>
            </div>
          </div>
        </div>
        <div className="articleBottom">
          <div className="articleBottom-Title">More From The Siren</div>
          <hr className='articleBottom-hr'/>
        <div className="article-wrap">
          {data.filter((value) => value.id !== path && value.category === categor).map((item) => (
            <div  key={item.id} className='article-bottom-main-box' >
              <Link to={`/article/${item.id}`}>
                <img className='article-bottom-img' src={item.image} alt="" />
              </Link>
              <h3 className='article-bottom-nameh3'>{item.name}</h3>
              <div className="article-bottom-name">
              <div className="article-bottom-left">
              <img className="article-bottom-left-img" src={item.avatar} alt="" width={'60px'} />
              </div>
              <div className="article-bottom-right">
              <h3>{item.Dname}</h3>
              <h5>Date : {item.release}</h5>
              </div>
            </div>
        </div>
          ))}
        </div>
        </div>
        </>
      ))}
      <Footer/>
    </div>
  )
}

export default Article;
