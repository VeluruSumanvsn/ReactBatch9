import React from 'react'

export default function Usestate(){
    const names = [
            {name: "ranjith"},
            {name: "ram"},
            {name: "nani"},
            {name:"rock"},
        
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