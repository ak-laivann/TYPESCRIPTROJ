import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import "./HelloWorld.css";

interface NameProps {
  value?: string;
}

const HelloWorld = (props: NameProps) => {
  const [name, setName] = useState<NameProps | null>(null);

  function handleClick() {
    setName({ value: "AK" });
  }
  return (
    <div>
      Hello &emsp;<strong>{name?.value}</strong>
      <button onClick={handleClick}>Name</button>
    </div>
  );
};

export default HelloWorld;
