import ComponentC from "./ComponentC";

const ComponentB = ({ count, setCount }) => {
  return (
    <div className="w-full py-10 bg-red-100 px-20">
      <h1 className="text-3xl py-5">Component B</h1>
      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 text-white px-4 py-1"
      >
        Reset Count
      </button>
      <ComponentC count={count} />
    </div>
  );
};

export default ComponentB;
