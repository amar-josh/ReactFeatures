import React, { useRef } from "react";
import ChildRef from "./ChildRef";

const ParentRef = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };

  // const hanldeClickChildFun = () => {
  //   ref.current.handleChange();
  // };

  return (
    <div>
      ParentRef
      <ChildRef ref={ref} />
      {/* <button onClick={() => hanldeClickChildFun()}>Click Me</button> */}
      {/* below button perform action for direct child dom element */}
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
};

export default ParentRef;
