import React, { createContext, useState } from "react";
import ChildContex from "./ChildContex";

export const UserContex = createContext("");

const ParentContext = () => {
  const [name, setName] = useState("Amar");

  return (
    <UserContex.Provider value={name}>
      <button onClick={() => setName("Prajakta")}>Set Name From Parent</button>
      <ChildContex />
    </UserContex.Provider>
  );
};

export default ParentContext;
