import React from "react";
import preguntas from "../questions.js";
import { useSate } from "react";

const questions = ({preguntaActual}) => {
   // const [preguntaActual, setPreguntaActual] = useSate(0);
  return (
    <div>
      {/*Aqui va el numero de la pregunta*/}
      <div className="numero-pregunta">
        <span>pregunta {preguntaActual + 1} de</span> {preguntas.length}
      </div>
      {/*Aqui muestra la pregunta*/}
      <div className="titulo-pregunta">{preguntas[preguntaActual].titulo}</div>
    </div>
  );
};

export default questions;
