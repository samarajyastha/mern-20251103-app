import { useEffect, useState } from "react";
import Card from "./Card";
import Tile from "./Tile";

function App() {
  // let name = "hari";

  // Local state management, create local state variable => useState()
  // useState(<initial-value>)
  // useState => [state-variable, function to update this state variable]

  // const state = useState("Rohan"); // [state, function]
  // const name = state[0]; // state variable
  // const nameFunction = state[1]; // function
  // const [count, setCount] = useState(0);

  // const students = ["Ram", "Hari", "Sita", "Rohan", "Ramesh"];

  const [students, setStudents] = useState([
    "Ram",
    "Hari",
    "Sita",
    "Rohan",
    "Ramesh",
  ]);

  function updateName() {
    setName("Shisir");
  }

  const [name, setName] = useState("Ram");

  const [count, setCount] = useState(1);

  // useEffect(function, dependency array)
  useEffect(() => {
    // this function is called on change in state (based on dependency)
    if (count < 10) return;

    console.log("useEffect is called.");
  }, [count]);

  return (
    <div>
      <Tile />
      <h1>Name: {name}</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Count +</button>
      <button onClick={updateName}>Change name</button>
      <button
        onClick={() => {
          setStudents(["John", "Jerry", "Blake"]);
        }}
      >
        Fetch students
      </button>

      {students.map((student) => (
        <Card key={student} title={student} subtitle={"students"} />
      ))}
    </div>
  );
}

export default App;
