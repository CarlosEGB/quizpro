import React from "react";
import Card from "../../components/card/Card";
import questions from "../../questions.json"

const Cards = () => {
  return (
    <div className="container pt-3 d-flex flex-column align-items-center border">
      <div className="row col-md-8">
        {
          questions.map((question) =>
          (
            <div className="col-md-12 mb-2" key={question.id}>
              <Card  question={question} />
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Cards;
