import React, { useState } from 'react'

export default function Header(){
    const [names, setNames] = useState([
            {name: "Suman"},
            {name: "Surendra"},
            {name: "Kishore"},
            {name: "Rajesh"},
            {name: "Swarna"},
            {name: "Sasi"},
            {name: "Kerthi"},
            {name: "Dayakar"},
            {name: "Suman"},
            {name: "Surendra"},
            {name: "Kishore"},
            {name: "Rajesh"},
            {name: "Swarna"},
            {name: "Sasi"},
            {name: "Kerthi"},
            {name: "Dayakar"},
            {name: "Suman"},
            {name: "Surendra"},
            {name: "Kishore"},
            {name: "Rajesh"},
            {name: "Swarna"},
            {name: "Sasi"},
            {name: "Kerthi"},
            {name: "Dayakar"},
            {name: "Suman"},
            {name: "Surendra"},
            {name: "Kishore"},
            {name: "Rajesh"},
            {name: "Swarna"},
            {name: "Sasi"},
            {name: "Kerthi"},
            {name: "Dayakar"},
        
    ])
    return(
        <div>
            <ul>
                <li>ranjith</li>
                <li>Hello</li>
                <li>Good</li>
                <li>Hello</li>
                <li>sarika</li>
                <li>Hello</li>
                <li>hello </li>
            </ul>
           <h1>Loop the data through map method</h1>
           {names.map((data, index)=>(
            <p key={index}>{data.name}</p>
           ))}
        </div>
    )
}