import React from "react";
import "./Quiz.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ModalAnswer from "./ModalAnswer"
import Result from "./Result"


const Quiz = ({ questionsApi }) => {

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

  const handleAnswer = (isCorrect, event) => {
    event.target.classList.replace("btn-light", isCorrect ? "btn-success" : "btn-danger");
    document.getElementById("buttonNextId").classList.remove("disabled");

    if (isCorrect && intento === 0 && questionNow === askCurrent) {
      setScore(score + 1);
    }
    if (intento === 0 && questionNow === askCurrent) {
      setAskCurrent(askCurrent + 1);
    }
    setIntento(intento + 1)
  }

  const handleNextQuestion = () => {
    if (questionNow === questionsApi.length - 1) {
      setTimeQuiz(minutesDown + ":" + (secondsDown < 10 ? "0" + secondsDown : secondsDown));
      setIsFinished(true);
    } else {
      setQuestionNow(questionNow + 1);
      setIntento(0);
      //setMinutesUp(0);
      //setSecondsUp(0);
      document.getElementById("buttonNextId").classList.add("disabled");
    }
  }

  const handleBackQuestion = () => {
    if (questionNow === 0) {
      navigate("/")
    } else {
      setQuestionNow(questionNow - 1);
    }
    setIntento(1)
    document.getElementById("buttonNextId").classList.remove("disabled");
  }

  if (isFinished) {
    return (
      <Result score={score} numQuestions={questionsApi.length} timeQuiz={timeQuiz} />
    );
  }

  return (
    <div className="container pt-3 d-flex flex-column justify-content-center align-items-center border" id="idContenedorQuiz">
      <div className="row d-flex justify-content-center col-md-8">
        <div className="mb-3 ">
          <div id="idBgQuestion" className="card text-white ">
            <div className="card-body ">
              <div className="row ">

                <h5 className="card-title col-md-3">Pregunta {questionNow + 1} de {questionsApi.length}</h5>
                <label className="col-md-3 fw-bold col-form-label text-center">
                  Score: {score} de {questionsApi.length}
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
                <p className="card-text" dangerouslySetInnerHTML={{ __html: questionsApi[questionNow].question }}>
                </p>
              </div>
              <hr />

              {
                questionsApi[questionNow].answers.map((answer, index) => (
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
                  id="buttonBackId"
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                  onClick={handleBackQuestion}
                >
                  Back
                </button>

                <button
                  id="buttonNextId"
                  className="btn btn-outline-info disabled"
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
