import Card from "./Card";

function App() {
  const name = "hari";

  const students = ["Ram", "Hari", "Sita", "Rohan", "Ramesh"];

  return (
    <div>
      <h1>Name: {name}</h1>

      {students.map((student) => (
        <Card title={student} subtitle={"students"} />
      ))}
    </div>
  );
}

export default App;
