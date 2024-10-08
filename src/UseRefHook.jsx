import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  console.log("render function");
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
};

export default UseRefHook;
