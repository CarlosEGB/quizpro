import React from "react";

const Message = () => {
    return (
        <>
            <div className="modal fade" id="modalTrue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-white" id="idAnswer">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 fw-bold mx-auto " id="exampleModalLabel">!! Felicitaciones es la correcta ¡¡</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label className="fw-bold col-form-label text-center">
                                Criterios:
                            </label>
                            <p className="card-text">
                                Some quick examplef
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" style={{ width: "200px" }} data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="modalFalse" tabIndex="-1" aria-labelledby="modalFalse" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-white" id="idBanner">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">!! NO ES, LOSIENTO ¡¡</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <label className="fw-bold col-form-label ">
                              !!  Lo Lograrás &#128521; Animo ¡¡
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark mx-auto" style={{ width: "200px" }} data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;