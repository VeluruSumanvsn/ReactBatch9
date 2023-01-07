import React from 'react';

class Navbar extends React.Component{
    state={
        name:"sarika"
    }
    render(){
    return(
        <div>
           <h1>class based Component</h1>
           <h2>{this.state.name}</h2>
        </div>
    )
}
}
export default Navbar;