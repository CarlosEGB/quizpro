import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        navigate("/" + event.target.value)
    };

    return (
        <div className="container d-flex flex-column  justify-content-center border" id='idContenedorMenu'>
            <div className="row d-flex justify-content-center">
                <div id="idMenu" className="rounded-4 col-md-6 shadow-lg">
                    <h1 className="text-center pt-2 text-white">Menu</h1>
                    <hr className="border border-white border-1 col-md-10 mx-auto" />
                    <div className="d-grid gap-2 col-md-8 mx-auto mb-3 fw-bold ">
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" value="Cards" onClick={handleClick} type="button">¡¡ GESTIONA tus Preguntas !!</button>
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" value="FormAsk" onClick={handleClick} type="button">¡¡ CREAR tus Preguntas !!</button>
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" value="quiz" onClick={handleClick} type="button">¡¡ HAZ tu Quiz !!</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;
