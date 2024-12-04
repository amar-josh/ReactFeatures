import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ChildRef = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  // access or expose method or take control of child component into parent component then use it.
  // useImperativeHandle(ref, () => ({
  //   handleChange,
  // }));

  return (
    <div>
      {/* <input ref={inputRef} type="text" placeholder="childRef" /> */}
      {/* Below code give the direct access of DOM element to the parent element*/}
      <input ref={ref} type="text" placeholder="parentref" />
    </div>
  );
});

export default ChildRef;
