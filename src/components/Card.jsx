import React from "react";

const Card = () => {
  return (
    <div className="card ">
      <div className="card-body">
        <h3 className="card-title text-center">1 </h3>
        <p className="card-text">
          From a Testing perspective, what are the MAIN purposes of
          Configuration Management?: i) Identifying the version of software
          under test. ii) Controlling the version of testware items. iii)
          Developing new testware items. iv) Tracking changes to testware items.
          v) Analysing the need for new testware items.
        </p>

        <div className="mb-2 row border bg-light">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label ">
            A:
          </label>
          <div className="col-sm-10">
            <p className="card-text">ii, iv and v.</p>
          </div>
        </div>

        <div className="mb-2 row border bg-light">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            B:
          </label>
          <div className="col-sm-10">
            <p className="card-text">ii, iv and v.</p>
          </div>
        </div>

        <div className="mb-2 row border bg-light">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            C:
          </label>
          <div className="col-sm-10">
            <p className="card-text">ii, iv and v.</p>
          </div>
        </div>

        <div className="mb-2 row border bg-light">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            D:
          </label>
          <div className="col-sm-10">
            <p className="card-text">ii, iv and v.</p>
          </div>
        </div>

        <div
          className="btn-group gap-2"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-outline-danger">
            Delete
          </button>
          <button type="button" className="btn btn-outline-warning">
            Editar
          </button>
          <button type="button" className="btn btn-outline-success">
            Ver Respuesta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
