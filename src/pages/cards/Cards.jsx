import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import axios from 'axios';

const Cards = () => {
  const [questionsApi, setQuestionsApi] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/questions/all')
      .then(response => setQuestionsApi(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container pt-3 d-flex flex-column align-items-center border">
      <div className="row col-md-8">
        {
          questionsApi.map((question) =>
          (
            <div className="col-md-12 mb-2" key={question.id}>
              <Card question={question} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;
