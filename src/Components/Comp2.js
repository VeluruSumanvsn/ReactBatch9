import React from 'react'

function Comp2(props) {
  return (
    <div>
        <button className="top"  onClick={props.increment}>increment</button>
    </div>
  )
}

export default Comp2