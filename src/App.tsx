import React from "react";
import HelloWorld from "./Compnents/HelloWorld";
import "./App.css";
import { NameProps } from "./Compnents/HelloWorld";

function App(props: NameProps) {
  return (
    <div className="App">
      <HelloWorld color=" " value={props.value} />
    </div>
  );
}

export default App;
