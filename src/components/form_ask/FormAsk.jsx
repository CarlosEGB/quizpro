import React, { useState } from "react";
import "./FormAsk.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalFormAsk from "./ModalFormAsk"

const FormAsk = () => {

  const navigate = useNavigate();

  const [questionsApi, setQuestionsApi] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Select");
  const [textHtml, setTextHtml] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');

  let data = {
    question: textHtml,
    answers: [
      {
        answer: answerA,
        correct: (selectedOption === "A") ? true : false
      },
      {
        answer: answerB,
        correct: (selectedOption === "B") ? true : false
      },
      {
        answer: answerC,
        correct: (selectedOption === "C") ? true : false
      },
      {
        answer: answerD,
        correct: (selectedOption === "D") ? true : false
      }
    ]
  };



  const handleGetAnswerA = (event) => {
    setAnswerA(event.target.value)
  }

  const handleGetAnswerB = (event) => {
    setAnswerB(event.target.value)
  }

  const handleGetAnswerC = (event) => {
    setAnswerC(event.target.value)
  }

  const handleGetAnswerD = (event) => {
    setAnswerD(event.target.value)
  }

  const handleCreateQuestion = event => {
    axios.post('http://localhost:8080/api/questions/add', data)
      .then(response => setQuestionsApi(questionsApi.concat(response.data)))
      .catch(error => console.log(error));
      navigate("/");
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeEditor = (html) => {
    setTextHtml(html);
  }

  const handleCancelForm = () => {
    navigate("/");
  }

  return (
    <>
      <div className="container border d-flex flex-column justify-content-center" id="idContenedorForm">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <form className="p-3 shadow-lg m-2 rounded-3" id="myForm">

              <div className="mb-2">
                <h4 htmlFor="exampleFormControlTextarea189" className="form-label text-center">
                  Pregunta 1
                </h4>
                <hr />
                <div className="bg-white ">
                  <ReactQuill
                    theme="snow"
                    value={textHtml}
                    onChange={handleChangeEditor}
                  />
                </div>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <label htmlFor="exampleFormControlInput15" className="form-label fs-5 me-3">
                  A:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={answerA}
                  onChange={handleGetAnswerA}
                ></textarea>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <label htmlFor="exampleFormControlInput15" className="form-label fs-5 me-3">
                  B:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={answerB}
                  onChange={handleGetAnswerB}
                ></textarea>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <label htmlFor="exampleFormControlInput15" className="form-label fs-5 me-3">
                  C:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={answerC}
                  onChange={handleGetAnswerC}
                ></textarea>
              </div>

              <div className="mb-2 d-flex align-items-center">
                <label htmlFor="exampleFormControlInput15" className="form-label fs-5 me-3">
                  D:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={answerD}
                  onChange={handleGetAnswerD}
                ></textarea>
              </div>

              <hr />

              <div className="form-floating col-md-4 mx-auto ">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={selectedOption}
                  onChange={handleChange}>
                  <option select>select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
                <label htmlFor="floatingSelect">La Respuesta es la:</label>
              </div>

              <hr />

              <div className="container d-flex justify-content-between pt-2 " >
                <button
                  className="btn btn-outline-danger fw-bold border-2"
                  type="button"
                  style={{ width: "200px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalFalse"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-outline-success fw-bold border-2"
                  type="button"
                  style={{ width: "200px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalTrue"
                >
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <ModalFormAsk handleCancel={handleCancelForm} handleSave={handleCreateQuestion}/>
    </>
  );
};

export default FormAsk;
