import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let someObject={
    username : "Dipesh Kumar",
    age : 28
  }
  return (
    <>
      <h1 className="bg-orange-500 text-neutral-950 p-10 rounded-xl m-5">
        Dipesh kumar with TailwindCSS
      </h1>
      
      <Card username="Dipesh kumar" btnText="Open me"/>
      <Card username="Chai With Dipesh" btnText="Click me"/>

    </>
  );
}

export default App;
