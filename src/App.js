import React from "react";
import ChangeName from "./Components/ChangeName";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Funcbased from "./Components/Funcbased";
import Table from "./Components/Table";

function App() {
  return (
    <header>
       <Header />
       <Navbar /> 
       <Counter />
       <Home />
       <ChangeName />
       <Funcbased />
       <Table />
    </header>
  );
}
export default App;
