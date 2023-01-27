import React, { useState } from 'react'
import Comp1 from './Comp1';

export const Controlled = () => {
    const[data, setData] = useState('');

    const handler = (event) =>{
        setData(event.target.value)
    }
  return (
    <div>
        <h1>Name: {data}</h1>
        <input type="text" onChange={handler}/>
        <Comp1 handler={handler}/>
    </div>
  )
}
