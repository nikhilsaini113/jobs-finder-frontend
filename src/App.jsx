import { useState } from "react";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component4 from "./Component4";
import Component3 from "./Component3";
import Component5 from "./Component5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </>
  );
}

export default App;
