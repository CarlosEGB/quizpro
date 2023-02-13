import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100 border">
      <div className="row">
        <div className="col-md-12 mb-3">
          <div id="idBgQuestion" className="card text-white">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-sm-4">Pregunta 1 de 5</h5>
                <label className="col-sm-4 fw-bold col-form-label text-center">
                  Time-Question. 5:00
                </label>
                <label className="col-sm-4 fw-bold col-form-label text-center">
                  Time-Quiz. 5:00
                </label>
              </div>

              <hr></hr>
              <div className="mb-3 row col-sm-12">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjof the
                  card's content .heshsrhs cffrftfgfg gmfgmfmfgmf
                </p>
              </div>

              <div className="mb-3 row">
                <label className="fw-bold col-sm-2 col-form-label text-center">
                  A.
                </label>

                <div className="col-sm-10">
                  <button className="btn btn-light col-12" type="button">
                    respuesta 1
                  </button>
                </div>
              </div>
              <hr></hr>
              <div className="mb-3 row">
                <label className="fw-bold col-sm-2 col-form-label text-center">
                  B.
                </label>

                <div className="col-sm-10">
                  <button className="btn btn-light col-12" type="button">
                    respuesta 2
                  </button>
                </div>
              </div>
              <hr></hr>
              <div className="mb-3 row">
                <label className="fw-bold col-sm-2 col-form-label text-center">
                  C.
                </label>

                <div className="col-sm-10">
                  <button className="btn btn-light col-12" type="button">
                    respuesta 3
                  </button>
                </div>
              </div>

              <hr></hr>

              <div className="mb-3 row">
                <label className="fw-bold col-sm-2 col-form-label text-center">
                  D.
                </label>

                <div className="col-sm-10">
                  <button className="btn btn-light col-12" type="button">
                    respuesta 4
                  </button>
                </div>
              </div>

              <div className="container d-flex justify-content-between">
                <button
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                >
                  Anterior
                </button>

                <button
                  className="btn btn-outline-info"
                  style={{ width: "200px" }}
                  type="button"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <div id="idAnswer" className="card text-white">
              <div className="card-body">
                <label className="fw-bold col-form-label text-center">
                  La respuesta es: [ Felicitaciones es la correcta ]
                </label>
                <hr></hr>
                <label className="fw-bold col-form-label text-center">
                  Criterios:
                </label>
                <p className="card-text">
                  Some quick examplef
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <div id="idBanner" className="card text-white">
              <div className="card-body">
                <label className="fw-bold col-form-label text-center">
                  La respuesta es: [ NO ES, LOSIENTO ]. Pero hay otra oportunidad
                  tu PUEDES ;)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
