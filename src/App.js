import logo from "./logo.svg";
import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import "./App.css";
import SetTimeout from "./SetTimeout";
import ReducerFun from "./reducerhook";
import ParentContext from "./Contexthook/ParentContext";
import SetInterval from "./SetInterval";
import UseRefHook from "./UseRefHook";
import ParentMemo from "./reactMemo/ParentMemo";
import ParentRef from "./forwardRef/ParentRef";

const LazyLoad = lazy(() => import("./lazyloading/LazyLoad"));
// import LazyLoad from "./lazyloading/LazyLoad";

function App() {
  return (
    <div className="App">
      <SetInterval />
      <SetTimeout />
      <ReducerFun />
      {/* Context */}
      <div style={{ margin: "15px" }}>Context</div>
      <ParentContext />
      {/* useRef */}
      <div style={{ margin: "15px" }}>UseRef</div>
      <UseRefHook />
      {/* React.memo() */}
      <div style={{ margin: "15px" }}>React.memo()</div>
      <ParentMemo />
      {/* React.lazy() */}
      <div style={{ margin: "15px" }}>React.lazy()</div>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyLoad />
      </Suspense>
      {/* Forward Ref */}
      <div style={{ margin: "15px" }}>forwardRef and useImperativeHandle</div>
      <ParentRef />
    </div>
  );
}

export default App;
