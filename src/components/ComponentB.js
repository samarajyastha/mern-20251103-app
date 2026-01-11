"use client"; // this directive will make the component Client component

import { useState } from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="py-10 border">
      <h2 className="text-5xl">Client component</h2>

      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
