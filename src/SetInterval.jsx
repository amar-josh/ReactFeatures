import React, { useState, useCallback, useEffect } from "react";

const SetInterval = () => {
  const [count, setCount] = useState(10);

  const getCounter = useCallback(() => {
    const myid = setInterval(() => {
      setCount((pcount) => {
        if (pcount <= 1) {
          clearInterval(myid);
        }
        return pcount - 1;
      });
    }, 1000);
    return myid;
  }, []);

  useEffect(() => {
    const id = getCounter();
    return () => clearInterval(id);
  }, [getCounter]);

  return <div>SetInterval {count}</div>;
};

export default SetInterval;
