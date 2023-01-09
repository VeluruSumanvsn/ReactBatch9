import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name: "Virat",
            age: 30
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState(value => ({
            count: value.count + 1,
        }));
    }
    decrement(){
        this.setState(value => ({
            count: value.count - 1,
        }));
    }
    componentDidMount(){
        console.log("Component Did mount");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
export default Counter