import React, { useState, useEffect, useCallback } from "react";

const SetTimeout = () => {
  const [count, setCount] = useState(10);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(count <= 0) return;
      setCount(prev => prev - 1);
        }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return <div>{count}</div>;
};

export default SetTimeout;
