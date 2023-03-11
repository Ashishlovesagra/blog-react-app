import React from "react";
import { Link } from "react-router-dom";

function RightCategoryFunc(props) {
  const { category, filterByCategory } = props;

  const filteredData = filterByCategory(category);

  return (
    <div>
      <div className="left-title">Top Posts</div>
      <hr className="left-titleHr" />
      {filteredData.map((dataItem) => {
        return (
          <>
            <div id="{dataItem.id}" className="rightBox">
              <div className="movierightImage">
                <Link to={`/article/${dataItem.id}`} className="left-data-link">
                  <img className="image" src={dataItem.image} alt="" />
                </Link>
              </div>
              <div className="rightcontent">
                <h2 className="name">{dataItem.name}</h2>
                <h4 className="imdb">{dataItem.imdb}</h4>
                <h3 className="release">{dataItem.release}</h3>
              </div>
            </div>
            <hr className="righthr" />
          </>
        );
      })}
      <div className="add">
        <span className="addtext">Advertisement</span>
      </div>
    </div>
  );
}

export default RightCategoryFunc;
