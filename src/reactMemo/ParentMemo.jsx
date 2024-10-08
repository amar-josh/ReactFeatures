import React, { useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
  const [count, setCount] = useState(0);
  const [value, setChange] = useState("");

  return (
    <div>
      {value}
      <ChildMemo count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="text" onChange={(e) => setChange(e.target.value)} />
    </div>
  );
};

export default ParentMemo;
