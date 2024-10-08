import React, { useContext, useState } from "react";
import { UserContex } from "./ParentContext";

const ChildContex = () => {
  const value = useContext(UserContex);

  return <div>Chile Comp {value}</div>;
};

export default ChildContex;
