import React from 'react';
import './App.css';
import {ExampleContextComponent} from "./examples/context/ExampleContextComponent";
import {VisibilityProvider} from "./examples/context/VisibilityProvider";
import {HookExample} from "./examples/hooks/HookExample";
import {HocExample} from "./examples/hoc/HocExample";

function App() {
  return (
    <div className={"container"}>
      <h1>Example "Advanced" React</h1>
        <div className={"box"}>
            <h1>Context</h1>
            <VisibilityProvider defaultVisibility={true}>
                <ExampleContextComponent/>
                <ExampleContextComponent/>
            </VisibilityProvider>
        </div>
        <div className={"box"}>
            <h1>HOC</h1>
            <HocExample greeting={"hello"} name={"Bob"}/>
        </div>
        <div className={"box"}>
            <h1>Hooks</h1>
            <HookExample/>
        </div>
    </div>
  );
}

export default App;
