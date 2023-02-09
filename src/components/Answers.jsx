import React from "react";
import preguntas from "../questions";
import { useState } from "react";

const answers = () => {
  // React state hooks, type useState
  const [preguntaActual, setPreguntaActual] = useState(0);
  return (
    <div className="lado-izquierdo">
      {/*Aqui va el numero de la pregunta*/}
      <div className="numero-pregunta">
        <span>pregunta {preguntaActual + 1} de</span> {preguntas.length}
      </div>

      {/*Aqui muestra la pregunta*/}
      <div className="titulo-pregunta">{preguntas[preguntaActual].titulo}</div>

      {/*Aqui muestra la respuesta correcta de la pregunta*/}
      <div>
        {
          preguntas[preguntaActual].opciones.filter(
            (opcion) => opcion.isCorrect
          )[0].textoRespuesta
        }
      </div>

      {/*Aqui interactuas con las repuestas */}
      <div>
        {/* cambiar la siguiente pregunta y su respuesta*/}
        <button
          onClick={() => {
            if (preguntaActual === preguntas.length - 1) {
              window.location.href = "/";
            } else {
              setPreguntaActual(preguntaActual + 1);
            }
          }}
        >
          {/* si acaba de revisar las respuesta sale volver a jugar sino siguiente*/}
          {preguntaActual === preguntas.length - 1
            ? "Volver a jugar"
            : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default answers;
