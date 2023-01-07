import React,{useState} from "react";

const Home = () =>{
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        count === 0 ? setCount(0) : setCount(count - 1);
    }
    return(
        <div>
            <h1>Functional Component</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Home