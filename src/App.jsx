import React from "react";
import "./App.css";
import Menu from "./pages/menu/Menu";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Cards from "./pages/cards/Cards";
import Quizs from "./components/quiz/Quizs";
import FormAsk from "./components/form_ask/FormAsk";
import Pruebas from "./pages/pruebas/Pruebas"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/quizs" element={<Quizs />} />
          <Route exact path="/FormAsk" element={<FormAsk />} />
          <Route exact path="/pruebas" element={<Pruebas />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
