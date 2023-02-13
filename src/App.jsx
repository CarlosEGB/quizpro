import { useState } from "react";
import "./App.css";
import Menu from "./pages/menu/Menu";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Cards from "./pages/cards/Cards"
import Quiz from "./components/quiz/Quiz"
import FormAsk from "./components/form_ask/FormAsk"


function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/FormAsk" element={<FormAsk />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
