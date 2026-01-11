import ComponentB from "@/components/ComponentB";
import ComponentA from "@/components/ComponentA";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-9xl">HomePage</h1>
      <ComponentB />
      <ComponentA />
    </div>
  );
};

export default HomePage;
