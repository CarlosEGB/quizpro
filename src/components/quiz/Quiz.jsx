import React from "react";
import "./Quiz.css";
import { useState, useEffect } from "react";
import questions from "../../questions.json"
import { useNavigate } from 'react-router-dom';
import ModalAnswer from "./ModalAnswer"
import Result from "./Result"

const Quiz = () => {
  const opciones = ["A :", "B :", "C :", "D :"];
  const navigate = useNavigate();

  const [questionNow, setQuestionNow] = useState(0);
  const [askCurrent, setAskCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [intento, setIntento] = useState(0);
  const [minutesUp, setMinutesUp] = useState(0);
  const [secondsUp, setSecondsUp] = useState(0);
  const [minutesDown, setMinutesDown] = useState(60);
  const [secondsDown, setSecondsDown] = useState(0);
  const [timeQuiz, setTimeQuiz] = useState("");

  useEffect(() => {
    let intervalUp = setInterval(() => {
      if (secondsUp === 59) {
        setMinutesUp(minutesUp + 1);
        setSecondsUp(0);
      } else {
        setSecondsUp(secondsUp + 1);
      }
    }, 1000);
    return () => clearInterval(intervalUp);
  }, [minutesUp, secondsUp]);

  useEffect(() => {
    let intervalDown = setInterval(() => {
      if (secondsDown > 0) {
        setSecondsDown(secondsDown - 1);
      } else if (secondsDown === 0 && minutesDown > 0) {
        setMinutesDown(minutesDown - 1);
        setSecondsDown(59);
      } else {
        clearInterval(intervalDown);
      }
    }, 1000);
    return () => clearInterval(intervalDown);
  }, [minutesDown, secondsDown]);

  const handleAnswer = (isCorrect, event) => {
    //cambia de color a verde o rojo
    event.target.classList.replace("btn-light", isCorrect ? "btn-success" : "btn-danger");

    //valida el segundo intento
    if (isCorrect && intento === 0 && questionNow === askCurrent) {
      //puntuacion
      setScore(score + 1);
      //intentos
    }
    if (intento === 0 && questionNow === askCurrent) {
      setAskCurrent(askCurrent + 1);
    }
    setIntento(intento + 1)
  }

  const handleNextQuestion = () => {
    if (questionNow === questions.length - 1) {
      setTimeQuiz(minutesDown + ":" + (secondsDown < 10 ? "0" + secondsDown : secondsDown));
      setIsFinished(true);
    } else {
      //cambia de pregunta
      setQuestionNow(questionNow + 1);
      setIntento(0);
      setMinutesUp(0);
      setSecondsUp(0);
    }
  }

  const handleBackQuestion = () => {
    if (questionNow === 0) {
      navigate("/")
    } else {
      //cambia de pregunta
      setQuestionNow(questionNow - 1);
    }
    setIntento(1)
  }

  if (isFinished) {
    return (
      <Result score={score} numQuestions={questions.length} timeQuiz={timeQuiz} />
    );
  }

  return (
    <div className="container pt-3 d-flex flex-column justify-content-center align-items-center border" id="idContenedorQuiz">
      <div className="row d-flex justify-content-center col-md-8">
        <div className="mb-3 ">
          <div id="idBgQuestion" className="card text-white ">
            <div className="card-body ">
              <div className="row ">

                <h5 className="card-title col-md-3">Pregunta {questionNow + 1} de {questions.length}</h5>
                <label className="col-md-3 fw-bold col-form-label text-center">
                  Score: {score} de {questions.length}
                </label>
                <label className="col-md-3 fw-bold col-form-label text-center">
                  Time-Ask: {minutesUp}:{secondsUp < 10 ? `0${secondsUp}` : secondsUp}
                </label>
                <label className="col-md-3 fw-bold col-form-label text-center">
                  Time-Quiz: {minutesDown}:{secondsDown < 10 ? `0${secondsDown}` : secondsDown}
                </label>

              </div>

              <hr />
              <div className="mb-3 row m-3">
                <p className="card-text" dangerouslySetInnerHTML={{ __html: questions[questionNow].question }}>
                </p>
              </div>
              <hr />

              {
                questions[questionNow].answers.map((answer, index) => (
                  <div className="row" key={answer.id}>
                    <label className="fw-bold col-sm-2 col-form-label text-center">
                      {opciones[index % 4]}
                    </label>

                    <div className="col-sm-10">
                      <button
                        className="btn btn-light border-dark border-3 border-opacity-50 col-md-12"
                        type="button"
                        onClick={(e) => handleAnswer(answer.correct, e)}
                        data-bs-toggle="modal" data-bs-target={answer.correct ? "#modalTrue" : "#modalFalse"}
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
                  Back
                </button>

                <button
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                  onClick={(e) => handleNextQuestion(e)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAnswer />
    </div>
  );
};

export default Quiz;
