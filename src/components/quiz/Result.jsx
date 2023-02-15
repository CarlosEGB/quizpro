import React from "react"
import { useNavigate } from 'react-router-dom';

const Result = ({ score, numQuestions, timeQuiz }) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        navigate("/" + event.target.value)
    };

    return (
        <div className="container d-flex flex-column justify-content-center border" id='idContenedorMenu'>
            <div className="row d-flex justify-content-center">
                <div id="idMenu" className="rounded-4 col-md-6 shadow-lg">
                    <h1 className="text-center pt-2 text-white">Result</h1>
                    <hr className="border border-white border-1 col-md-10 mx-auto" />
                    <h2 className="text-center pt-2 text-white">
                        Score: [ {score} / {numQuestions} ]
                    </h2>
                    <hr className="border border-white border-1 col-md-10 mx-auto" />
                    <h4 className="text-center pt-2 text-white">
                        Time To Finish: [ {timeQuiz} ]
                    </h4>
                    <hr className="border border-white border-1 col-md-10 mx-auto" />
                    <div className="d-grid gap-2 col-md-8 mx-auto mb-3 fw-bold ">
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill fw-bold" value="" onClick={handleClick} type="button">¡¡ Volver al Menú !!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;