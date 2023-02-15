import React from "react";

const Message = ({ handleCancel, handleSave }) => {
    return (
        <>
            <div className="modal fade" id="modalFalse" tabIndex="-1" aria-labelledby="modalFalse" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-white" id="idBanner">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel"> !! Oye Te vas a ir ¡¡ </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <label className="fw-bold col-form-label ">
                                ¿¿ Estas Seguro ???
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={handleCancel}
                                style={{ width: "200px" }}
                                data-bs-dismiss="modal">CLARIN</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="modalTrue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-white" id="idAnswer">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">!! Vas a guardar ¡¡ </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  mx-auto">
                            <label className="fw-bold col-form-label">
                                ¿¿ Estas Seguro ??
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                style={{ width: "200px" }}
                                data-bs-dismiss="modal"
                            >
                                No Aun no
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={handleSave}
                                style={{ width: "200px" }}
                                data-bs-dismiss="modal"
                            >
                                Siii Seguro
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Message;