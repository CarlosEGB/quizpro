import React, { useState } from "react";
import "./FormAsk.css";

const FormAsk = () => {

  const [selectedOption, setSelectedOption] = useState("Select");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container border d-flex flex-column justify-content-center" id="idContenedorForm">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <form className="p-3 shadow-lg m-2 rounded-3" id="myForm">

            <div className="mb-2">
              <h4 htmlFor="exampleFormControlTextarea189" className="form-label text-center">
                Pregunta 1
              </h4>
              <hr />
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-2 d-flex align-items-center">
              <label htmlFor="exampleFormControlInput15" className="form-label fs-5 me-3">
                A:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
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
              <label for="floatingSelect">La Respuesta es la:</label>
            </div>

            <hr />

            <div className="container d-flex justify-content-between pt-2 " >
              <button className="btn btn-outline-danger fw-bold border-2" type="button" style={{ width: "200px" }}>
                Cancel
              </button>
              <button className="btn btn-outline-success fw-bold border-2" type="button" style={{ width: "200px" }}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAsk;
