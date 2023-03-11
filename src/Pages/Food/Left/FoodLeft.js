import React, { useContext } from 'react';
import CategoryFunc from '../../../Data/CategoryFunc';
import { content } from '../../../Data/DataApi';

function FoodLeft() {
    const [data]=useContext(content);
    return (
      <div>
          <div>
          <CategoryFunc category="food" dataValue={data} />
          </div>
      </div>
    )
    
}

export default FoodLeft;
