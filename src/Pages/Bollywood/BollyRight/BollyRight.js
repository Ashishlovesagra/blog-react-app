import React, { useContext } from 'react';
import { content } from '../../../Data/DataApi';
import RightCategoryFunc from '../../../Data/RightCategoryFunc';
import './List.css';


function BollyRight() {
  const [dataValue] = useContext(content);
  const filterByCategory = (category) => {
    return dataValue.filter((item) => item.category === category);
  };
  return (
    <div>
      <RightCategoryFunc category="bollywood" filterByCategory={filterByCategory} />      
    </div>
  )
}

export default BollyRight;
