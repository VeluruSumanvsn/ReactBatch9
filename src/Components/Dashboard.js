import React, { useState } from 'react'
import Comp1 from '../Components/Comp1';
import Comp2 from '../Components/Comp2';

function Dashboard() {
    const[count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1)
    }
  return (
   <div>
    <Comp1 count={count}/>
    <Comp2 increment={increment}/>
   </div>
  )
}

export default Dashboard