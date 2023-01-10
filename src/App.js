import React from "react";
import ChangeName from "./Components/ChangeName";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Funcbased from "./Components/Funcbased";
import Table from "./Components/Table";
import Child from "./Components/Child";
import Usestate from "./Components/Usestate";
import Guest1 from "./Components/Guest1";

function App() {
  return (
    <React.Fragment>
       <Header /> 
       <Child />
       <Navbar /> 
       <Counter />
       <Home />
       <ChangeName />
       <Funcbased />
       <Table />
       <Usestate />
       <Guest1 />
    </React.Fragment>
  );
}
export default App;
