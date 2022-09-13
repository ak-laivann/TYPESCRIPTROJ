import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import "./HelloWorld.css";

interface NameProps {
  value?: string;
}

const HelloWorld = (props: NameProps) => {
  const [shit, setShit] = useState<NameProps | null>(null);

  function handleClick() {
    setShit({ value: "AARA AMUTHAN" });
  }
  return (
    <div>
      Hello &emsp;<strong>{shit?.value}</strong>
      <button onClick={handleClick}>Name</button>
    </div>
  );
};

export default HelloWorld;
