import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 border">
      <div className="row">
        <div className="col-md-4">
          <Card />
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
