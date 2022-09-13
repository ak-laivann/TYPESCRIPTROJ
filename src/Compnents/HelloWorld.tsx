import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import "./HelloWorld.css";

export interface NameProps {
  value?: string;
  color?: string;
  children?: string;
}

const HelloWorld = (props: NameProps) => {
  const [name, setName] = useState<NameProps | null>(null);

  function handleClick() {
    setName({ value: "AK" });
  }
  return (
    <div className={props.color} style={{ backgroundColor: props.color }}>
      Hello &emsp;<strong>{name?.value}</strong>
      <button onClick={handleClick}>{props.children}</button>
    </div>
  );
};

export default HelloWorld;
