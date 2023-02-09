import preguntas from "./questions";
import { useState, useEffect } from "react";
import Answers from "./components/Answers";
import Score from "./components/Score";
import Questions from "./components/Questions";

function App() {
  // React state hooks, type useState
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [isDisabled, setIsDisabled] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntajes
    if (isCorrect) setPuntuacion(puntuacion + 1);

    //añade el atributo class con la opcion respectiva estilos
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    //cambiar la siguiente pregunta y espera 1s para pasar
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
      }
    }, 1000);
  }

  //hacemos el conteo hacia atras de los 10s
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(tiempoRestante - 1);
      } else {
        setIsDisabled(true);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  //mostar resultado final del juego
  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <Score puntuacion={puntuacion} />

          {/*Aqui un boton para volver a iniciar*/}
          <div>
            <button onClick={() => (window.location.href = "/")}>
              {" "}
              Volver a jugar
            </button>
          </div>

          {/*Aqui un boton para ver las respuestas*/}
          <div>
            <button
              onClick={() => {
                setPreguntaActual(0);
                setIsFinished(false);
                setAnswerShown(true);
              }}
            >
              ver respuestas
            </button>
          </div>
        </div>
      </main>
    );

  // muestra las preguntas con las respuestas
  if (answerShown)
    return (
      <main className="app">
        <Answers />
      </main>
    );

  //interacion con las preguntas
  return (
    <main className="app">
      <div className="lado-izquierdo">
        <Questions preguntaActual={preguntaActual} />

        {/*Aqui muestra el tiempo restante de la pregunta si no un botton */}
        <div>
          {!isDisabled ? (
            <span className="tiempo-restante">
              Tiempo Restante: {tiempoRestante}
            </span>
          ) : !(preguntaActual === preguntas.length - 1) ? (
            //este boton reinicia todo al pasar la siguiente pregunta
            <button
              onClick={() => {
                setTiempoRestante(10);
                setIsDisabled(false);
                setPreguntaActual(preguntaActual + 1);
              }}
            >
              Continuar
            </button>
          ) : (
            <button
              onClick={() => {                
                setIsFinished(true);                
              }}
            >
              Ver Resultados
            </button>
          )}
        </div>
      </div>

      <div className="lado-derecho">
        {/*Aqui muestra las opciones de la pregunta*/}
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button
            disabled={isDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {/*Aqui muestra el texto de cada opcion*/}
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
