import React, { useEffect } from "react";

const ChildComponent = ({ updateCount, finalizar }) => {

    const numeroSum = () => {
        updateCount(0)
    }
    return (
        <>
            <button onClick={numeroSum}>reiniciar</button>
            <button onClick={finalizar}>finalizar</button>
        </>
    );

};

export default ChildComponent;