import { useEffect, useState } from "react";

const ComponentC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  const myClass = `shadow-lg border border-green-500`;

  return (
    <div className={`${myClass} bg-amber-200`}>
      ComponentC
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentC;
