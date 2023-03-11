import React, { useContext } from 'react';
import CategoryFunc from '../../../Data/CategoryFunc';
import { content } from '../../../Data/DataApi';
import './style.css';


function BollyList() {
    const [data]=useContext(content);
  return (
    <div>
        <div>
        <CategoryFunc category="bollywood" dataValue={data} />
        </div>
    </div>
  )
}

export default BollyList;
