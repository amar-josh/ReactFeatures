import React, { useState, useEffect, useCallback } from "react";

const SetTimeout = () => {
  const [count, setCount] = useState(10);

  const getCounter = useCallback(() => {
    const countDown = () => {
      setCount((pcount) => {
        if (pcount <= 1) {
          return 0;
        } else {
          return pcount - 1;
        }
      });
    };
    const timer = setTimeout(() => {
      countDown();
      getCounter();
    }, 1000);
    return timer;
  }, []);

  useEffect(() => {
    const timer = getCounter();
    return () => clearTimeout(timer);
  }, [getCounter]);

  return <div>{count}</div>;
};

export default SetTimeout;
