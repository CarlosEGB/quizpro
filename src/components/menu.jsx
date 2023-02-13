import React from "react";
import "./menu.css";

const MyComponent = ({ url, text, description }) => {
    return (
        <div className="menu-opt height: 100px">
            <a href={url}>
                <div>
                    <p>{text}</p>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

const Menu = () => {
    return (
        <div className="container mt-5">
            <h1>Menu</h1>
            <div className="row">
                <div className="col-md-8 no-padding-margin">
                    <MyComponent url="/op1" text="op1" description="Aqui podras crear tus preguntas" />
                </div>
                <div className="col-md-4 no-padding-margin">
                    <MyComponent url="/op2" text="op2" description="Aqui podras practicar tu vocabulario" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 no-padding-margin">
                <MyComponent url="/op3" text="op3" description="Aqui podras ver tus preguntas guardadas" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
