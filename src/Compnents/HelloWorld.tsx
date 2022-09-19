import React from "react";
import { useState } from "react";
import "./HelloWorld.css";

export interface NameProps {
  value?: string;
  color?: string;
  children?: string;
  onClick?: any;
}

const HelloWorld = (props: NameProps) => {
  const [name, setName] = useState<NameProps | null>(null);

  function handleClick() {
    setName({ value: "AK" });
  }
  return (
    <div className={props.color} style={{ backgroundColor: props.color }}>
      <p className="p">
        Hello<strong>{name?.value}</strong>
      </p>
      <button role="button" onClick={handleClick}>
        chuma {props.children}
      </button>
    </div>
  );
};

export default HelloWorld;
