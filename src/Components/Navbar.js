import React from "react";

class Navbar extends React.Component{
    state={
        name:"Vicky"
    }
    render(){
        return(
            <div className="header" id="Header">
                <h1>Class Based Component</h1>
                {/* <Child xyz={this.state.name}/> */}
            </div>
        )
    }
}
export default Navbar
