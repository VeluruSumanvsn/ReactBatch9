import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
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
import Dataloop from "./Components/Dataloop";
import Userouter from "./Components/Userouter";
import Practicedk from "./Components/Practicedk";

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
       <Surendra />
       <Dataloop />
       <BrowserRouter>
       <Routes>
        <Route path="/Userouter" element={<Userouter />} />
       </Routes>    
       </BrowserRouter>
       <Practicedk />
    </React.Fragment>
    
    
  );
}
export default App;
