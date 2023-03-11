import React, { useContext } from 'react';
import CategoryFunc from '../../../Data/CategoryFunc';
import { content } from '../../../Data/DataApi'; 


function TechList() {
    const [data]=useContext(content);
  return (
    <div>
        <div>
        <CategoryFunc category="technology" dataValue={data} />    
        </div>      
    </div>
  )
}

export default TechList;
