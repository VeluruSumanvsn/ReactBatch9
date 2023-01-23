import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    state={
        name:"Vicky"
    }
    render(){
        return(
            <div className="header" id="Header">
                <h1>Class Based Component</h1>
                {/* <Child xyz={this.state.name}/> */}
                <Link to="/">Back to Home Page</Link>
                <Link to="/changename">change name</Link>
                <Link to="/guest">guest</Link>
                <Link to="/table">table</Link>
            </div>
        )
    }
}
export default Navbar
