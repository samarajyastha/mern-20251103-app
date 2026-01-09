const ComponentC = ({ count }) => {
  return (
    <div className="w-full py-10 bg-green-100 px-20">
      <h1 className="text-3xl">Component C</h1>
      <p className="text-xl py-5">Count: {count}</p>
    </div>
  );
};

export default ComponentC;
