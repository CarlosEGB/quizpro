import React from "react";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="container d-flex flex-column  justify-content-center border" id='idContenedorMenu'>
            <div className="row d-flex justify-content-center">
                <div id="idMenu" className="rounded-4 col-md-6 shadow-lg">
                    <h1 className="text-center pt-2 text-white">Menu</h1>
                    <hr className="border border-white border-1 col-md-10 mx-auto" />
                    <div className="d-grid gap-2 col-md-8 mx-auto mb-3 fw-bold ">
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" to="/cards" type="button">¡¡ GESTIONA tus Preguntas !!</button>
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" type="button">¡¡ CREAR tus Preguntas !!</button>
                        <button className="btn btn-outline-light btn-lg border border-2 mb-2 rounded-pill" type="button">¡¡ HAZ tu Quiz !!</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;
