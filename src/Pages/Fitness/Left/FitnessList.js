import React, { useContext } from 'react';
import CategoryFunc from '../../../Data/CategoryFunc';
import { content } from '../../../Data/DataApi';

function FitnessList() {
    const [data]=useContext(content);
    return (
      <div>
          <div>
          <CategoryFunc category="fitness" dataValue={data} />
          </div>
      </div>
    )
}

export default FitnessList;
