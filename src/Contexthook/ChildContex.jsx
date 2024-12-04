import React, { useContext } from "react";
import { UserContex } from "./ParentContext";

const ChildContex = () => {
  const value = useContext(UserContex);

  return <div>Child Comp {value}</div>;
};

export default ChildContex;
