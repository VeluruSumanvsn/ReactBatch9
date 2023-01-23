import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ChangeName from "./Components/ChangeName";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Funcbased from "./Components/Funcbased";
import Child from "./Components/Child";
import Usestate from "./Components/Usestate";
import Guest1 from "./Components/Guest1";
import Surendra from "./Components/Surendra";
import './App.css';

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
       <Usestate />
       <Guest1 /> 
       {/* <Surendra /> */}
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/navbar" element={<Navbar />}/>
            <Route path="/changeName" element={<ChangeName />}/>
            <Route path="/table" element={<Table />}/>
            <Route path="/guest" element={<Guest1 />}/>
            <Route path="/surendra" element={<Surendra />}/>
            <Route path="/child" element={<Child />}/>
          </Routes>
       </BrowserRouter>
    </React.Fragment>
    
    
  );
}
export default App;
