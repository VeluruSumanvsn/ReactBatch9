import React from "react";
import { useState } from "react";

const ChangeName = () => {
  const [name, setname] = useState("");

  const changeName = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <form>
        <input type="text" onChange={changeName} />
      </form>
      <div>Hello!!! {name} Welcome to React Practice</div>
    </>
  );
};

export default ChangeName;
