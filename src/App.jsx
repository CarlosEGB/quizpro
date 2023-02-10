import { useState } from "react";
import "./App.css";
import FormAsk from "./components/FormAsk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container border d-flex justify-content-center ">
        <FormAsk />
      </div>
    </div>
  );
}
export default App;
