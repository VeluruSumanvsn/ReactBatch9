import React, { createContext, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Funcbased from "./Components/Funcbased";
import Surendra from "./Components/Surendra";

export const store = createContext();
function App() {
  const [data, setData] = useState(145);
  return (
    <React.Fragment>
      <store.Provider value={[data, setData]}>
        <Funcbased />
      </store.Provider>
      <Dashboard /> 
      <Surendra />
    </React.Fragment>
  );
  }
export default App;
