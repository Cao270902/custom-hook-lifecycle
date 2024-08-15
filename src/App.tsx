import { useState } from "react";
import "./App.css";
import MyComponent from "./page/MyComponent";

function App() {
  const [render, setRender] = useState(true);
  return (
    <>
      <button onClick={() => setRender(!render)}>+</button>
      {render && <MyComponent />}
    </>
  );
}

export default App;
