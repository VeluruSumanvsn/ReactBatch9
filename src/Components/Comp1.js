import React from 'react'

function Comp1(props) {
  return (
    <div>
      <input type="text" onChange={props.handler}/>
    </div>
  )
}

export default Comp1