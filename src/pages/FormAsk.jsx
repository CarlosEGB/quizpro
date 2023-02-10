import React from "react";
import "./FormAsk.css";

const FormAsk = () => {
  return (
    <div className="container border d-flex justify-content-center ">
      <div className="col-6">
        <form className="row shadow-lg m-2" id="myForm" >
          <div className="mb-2">
            <label
              htmlFor="exampleFormControlTextarea189"
              className="form-label"
            >
              Pregunta
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-2">
            <label htmlFor="formFile" className="form-label">
              Imagen
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleFormControlInput15" className="form-label">
              Opcion A
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput41"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleFormControlInput31" className="form-label">
              Opcion B
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput21"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleFormControlInput11" className="form-label">
              Opcion C
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleFormControlInput11" className="form-label">
              Opción: D
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="dropdown mb-2">
            <label htmlFor="exampleFormControlInput11" className="form-label">
              La Respuesta:
            </label>
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Answers
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Opción: A
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opción: B
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opción: C
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opción: D
                </a>
              </li>
            </ul>
          </div>

          <div className="d-grid gap-2 mb-2"></div>

          <div className="btn-group gap-2 mb-2" role="group" aria-label="Basic example">
            <button className="btn btn-danger" type="button">
              Cancel
            </button>
            <button className="btn btn-success" type="button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAsk;
