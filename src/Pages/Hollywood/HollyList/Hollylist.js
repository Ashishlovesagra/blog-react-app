import React, { useContext } from 'react';
import CategoryFunc from '../../../Data/CategoryFunc';
import { content } from '../../../Data/DataApi'; 


function Hollylist() {
    const [data]=useContext(content);
  return (
    <div>
        <CategoryFunc category="hollywood" dataValue={data} />
    
    </div>
  )
}

export default Hollylist;
