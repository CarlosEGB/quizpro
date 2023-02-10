import { useState } from "react";
import "./App.css";
import FormAsk from "./pages/FormAsk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FormAsk />
    </div>
  );
}
export default App;
