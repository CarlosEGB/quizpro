import React, { useState, useEffect } from "react";
import Quiz from "./Quiz.jsx"
import axios from 'axios';

const Quizs = () => {
    const [questionsApi, setQuestionsApi] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/questions/all')
            .then(response => {
                setQuestionsApi(response.data);
            })
            .catch(error => console.log(error));
    }, []);

   questionsApi.map((question) => (question.answers.sort(() => Math.random() - 0.5)))

    return (
        <>
            {questionsApi.length > 0 && <Quiz questionsApi={questionsApi} />}
        </>
    );
}

export default Quizs;