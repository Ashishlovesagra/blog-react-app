import React,{useContext} from 'react';
import { content } from '../../../Data/DataApi';
import RightCategoryFunc from '../../../Data/RightCategoryFunc';

function FoodList() {
    const [dataValue] = useContext(content);
    const filterByCategory = (category) => {
      return dataValue.filter((item) => item.category === category);
    };
    return (
      <div>
        <RightCategoryFunc category="food" filterByCategory={filterByCategory} />
      </div>
    )
}

export default FoodList;
