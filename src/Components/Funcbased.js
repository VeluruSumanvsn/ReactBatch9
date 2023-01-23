import React, { useContext } from "react";
import { store } from "../App";

function Funcbased() {
  const [data, setData] = useContext(store);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
export default Funcbased;
