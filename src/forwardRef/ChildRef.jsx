import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ChildRef = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  useImperativeHandle(ref, () => ({
    handleChange,
  }));

  return (
    <div>
      {/* Below code give the direct access of DOM element to the parent element*/}
      {/* <input ref={ref} type="text" placeholder="parentref" /> */}
      <input ref={inputRef} type="text" placeholder="childRef" />
    </div>
  );
});

export default ChildRef;
