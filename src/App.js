import React from "react";
import ChangeName from "./Components/ChangeName";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Funcbased from "./Components/Funcbased";

function App() {
  return (
    <header>
       <Header /> 
       <Navbar /> 
       <Counter />
       <Home />
       <ChangeName />
       <Funcbased />
    </header>
  );
}
export default App;
