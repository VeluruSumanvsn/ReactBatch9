import React from 'react'

export default function createstate(){
    const names = [
            {name: "pavan"},
            {name: "sai"},
            {name: "ram"},
            {name:"kumar"},
        
    ];
    return(
        <div>
            <h1>Loop the data through map method</h1>
           {names.map((data, index)=>(
            <p key={index}>{data.name}</p>
           ))}
        </div>
    )
}