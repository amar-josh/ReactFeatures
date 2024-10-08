import React from "react";

const ChildMemo = ({ count }) => {
  console.log("Render");
  return <div>{count}</div>;
};

export default React.memo(ChildMemo);
