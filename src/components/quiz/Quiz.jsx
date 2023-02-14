import React from "react";
import "./Quiz.css";
import { useState, useEffect } from "react";
import questions from "../../questions.json"
import { Navigate, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const opciones = ["A :", "B :", "C :", "D :"];
  const navigate = useNavigate();

  const [questionNow, setQuestionNow] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [intento, setIntento] = useState(0)
  const [isTrue, setIsTrue] = useState(2)

  const handleAnswer = (isCorrect, event) => {
    //cambia de color a verde o rojo
    event.target.classList.replace("btn-light", isCorrect ? "btn-success" : "btn-danger");

    //valida el segundo intento
    if (isCorrect && intento == 0) {
      //puntuacion
      setScore(score + 1);
      //reincio de intento
      setIsTrue(1)
    } else {
      setIsTrue(0)
    }
  }

  const handleNextQuestion = (event) => {
    console.log(questionNow)
    if (questionNow === questions.length - 1) {
      setIsFinished(true);
    } else {
      //cambia de pregunta
      setQuestionNow(questionNow + 1);
    }
  }

  const handleBackQuestion = () => {
    if (questionNow === 0) {
      navigate("/")
    } else {
      //cambia de pregunta
      setQuestionNow(questionNow - 1);
    }
  }

  const handleClick = (event) => {
    navigate("/" + event.target.value)
  };


  if (isTrue === 1) {
    (
      <div className="row mb-3">
        <div className="col-md-12">
          <div id="idAnswer" className="card text-white">
            <div className="card-body">
              <label className="fw-bold col-form-label text-center">
                La respuesta es: [ Felicitaciones es la correcta ]
              </label>
              <hr></hr>
              <label className="fw-bold col-form-label text-center">
                Criterios:
              </label>
              <p className="card-text">
                Some quick examplef
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isTrue === 0) {
    (
      <div className="row mb-3">
        <div className="col-md-12">
          <div id="idBanner" className="card text-white">
            <div className="card-body">
              <label className="fw-bold col-form-label text-center">
                La respuesta es: [ NO ES, LOSIENTO ]. Pero hay otra oportunidad
                tu PUEDES ;)
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container d-flex flex-column  justify-content-center border" id='idContenedorMenu'>
        <div className="row d-flex justify-content-center">
          <div id="idMenu" className="rounded-4 col-md-6 shadow-lg">
            <h1 className="text-center pt-2 text-white">Resultados</h1>
            <hr className="border border-white border-1 col-md-10 mx-auto" />
            <div className="d-grid gap-2 col-md-8 mx-auto mb-3 fw-bold ">
              <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" value="" onClick={handleClick} type="button">¡¡ Volver a Menú !!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100 border">
      <div className="row">
        <div className="col-md-12 mb-3">
          <div id="idBgQuestion" className="card text-white">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-sm-4">Pregunta {questionNow + 1} de {questions.length}</h5>
                <label className="col-sm-4 fw-bold col-form-label text-center">
                  Time-Question. 5:00
                </label>
                <label className="col-sm-4 fw-bold col-form-label text-center">
                  Time-Quiz. 5:00
                </label>
              </div>

              <hr></hr>
              <div className="mb-3 row col-sm-12">
                <p className="card-text" dangerouslySetInnerHTML={{ __html: questions[questionNow].question }}>
                </p>
              </div>

              {
                questions[questionNow].answers.map((answer, index) => (
                  <div className="mb-3 row" key={answer.id}>
                    <label className="fw-bold col-sm-2 col-form-label text-center">
                      {opciones[index % 4]}
                    </label>

                    <div className="col-sm-10">
                      <button
                        className="btn btn-light border-dark border-3 border-opacity-50 col-md-12 fw-bold"
                        type="button"
                        onClick={(e) => handleAnswer(answer.correct, e)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {answer.answer}
                      </button>
                    </div>
                    <hr />
                  </div>
                ))
              }

              <div className="container d-flex justify-content-between">
                <button
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                  onClick={handleBackQuestion}
                >
                  Anterior
                </button>

                <button
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                  onClick={(e) => handleNextQuestion(e)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quiz;
