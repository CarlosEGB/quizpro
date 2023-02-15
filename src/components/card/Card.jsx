import React from "react";
import "./Card.css";


const Card = ({ question , showAnswer}) => {
  const opciones = ["A", "B", "C", "D"];

  const showValues = () => {
    showAnswer(question.id);
  }

  return (
    <>
      <div className="card shadow-lg ">
        <div className="card-body">
          <h5 className="card-title">ID:[ {question.id} ] </h5>

          <hr />
          <div dangerouslySetInnerHTML={{ __html: question.question }} />
          <hr />

          {question.answers.map((answer, index) => (
            <div className="mb-2 row border bg-light border border-1 border-warning bg-opacity-75 shadow-sm rounded-pill" key={answer.id}>
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-center ">
                {opciones[index % 4]}:
              </label>
              <div className="col-sm-10">
                <p className="card-text">{answer.answer}</p>
              </div>
            </div>
          ))}

          <div className="container d-flex justify-content-between pt-2 " >
            <button type="button" className="btn btn-danger fw-bold" style={{ width: "200px" }}>
              Delete
            </button>
            <button type="button" className="btn btn-warning fw-bold " style={{ width: "200px" }}>
              Edit
            </button>
            <button
              id={"idbuttonShowAnswer" + question.id}
              type="button"
              className="btn btn-success fw-bold "
              style={{ width: "200px" }}
              data-bs-toggle="modal"
              data-bs-target="#modalTrue"
              onClick={showValues}
            >
              Show Answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
