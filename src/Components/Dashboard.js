import React, { useState } from 'react'
import Comp2 from '../Components/Comp2';
import Comp1 from './Comp1';


function Dashboard() {
    const[count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1)
    }
  return (
   <div className="top"  >
    <Comp1 count={count}/>
    <Comp2 increment={increment}/>
   </div>
  )
}

export default Dashboard