import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full py-10 bg-blue-100 px-20">
      <h1 className="text-3xl py-5">Component A</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-1"
      >
        Count +
      </button>
      <ComponentB count={count} setCount={setCount} />
    </div>
  );
};

export default ComponentA;
