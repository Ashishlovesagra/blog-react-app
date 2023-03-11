import React from "react";
import { Link } from "react-router-dom";

function CategoryFunc(props) {
  const { category, dataValue } = props;

  return (
    <>
      <div className="title">{category.toUpperCase()}</div>
      <hr className="titleHr" />
      <div></div>
      {dataValue
        .filter((item) => item.category === category)
        .map((dataItem) => {
          return (
            <>
              <div key={dataItem.id} className="latestBox">
                <div className="movieImage">
                  <Link
                    to={`/article/${dataItem.id}`}
                    className="left-data-link"
                  >
                    <img className='image2' src={dataItem.image} alt="" />
                  </Link>
                </div>
                <div className="content">
                  <h2>{dataItem.name}</h2>
                  <h4>{dataItem.imdb}</h4>
                  <br />
                  <p>{dataItem.content}</p>
                  <h3>{dataItem.release}</h3>
                </div>
              </div>
              <hr className="hr" />
            </>
          );
        })}
    </>
  );
}

export default CategoryFunc;
