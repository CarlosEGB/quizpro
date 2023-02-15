import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import axios from 'axios';
import ModalAnswer from "../../components/card/ModalAnswer"

const Cards = () => {
  const [questionsApi, setQuestionsApi] = useState([]);
  const opciones = ["A", "B", "C", "D"];
  const [idQuestion, setIdQuestion] = useState(0);
  const [optionAnswer, setOptionAnswer] = useState("");
  const [answerTrue, setAnswerTrue] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/api/questions/all')
      .then(response => setQuestionsApi(response.data))
      .catch(error => console.log(error));
  }, []);

  const showAnswer = (idQuestion) => {

    setIdQuestion(idQuestion);

    questionsApi[idQuestion-1].answers.map((answer) => (
      (answer.correct) ? setAnswerTrue(answer.answer) : ""
    ));

    questionsApi[idQuestion-1].answers.map((answer, index) => (
      (answer.correct) ? setOptionAnswer(opciones[index % 4]) : ""
    ));
  }

  return (
    <>
      <div className="container pt-3 d-flex flex-column align-items-center border">
        <div className="row col-md-8">
          {
            questionsApi.map((question) =>
            (
              <div className="col-md-12 mb-2" key={question.id}>
                <Card question={question} showAnswer={showAnswer} />
              </div>
            ))
          }
        </div>
      </div>
      <ModalAnswer idQuestion={idQuestion} optionAnswer={optionAnswer} answerTrue={answerTrue} />
    </>
  );
};

export default Cards;
