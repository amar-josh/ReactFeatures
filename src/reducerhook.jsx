import React, { useReducer } from "react";

// Step 1: Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const ReducerFun = () => {
  // Step 2: Initialize the useReducer hook
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      {/* Step 3: Dispatch actions based on the button clicked */}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerFun;
