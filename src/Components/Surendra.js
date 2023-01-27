import React, { useState } from 'react'
import Comp8 from '../Components/Comp8';
import Comp6 from '../Components/Comp6';

function Surendra() {
    const[count, setCount] = useState(0);
    const decrement = () =>{
        setCount(count-1)
    }
    
  return (
   <div className="center"> 
    <Comp8 count={count}/>
    <Comp6 decrement={decrement}/>
   </div>
  )
}
export default Surendra