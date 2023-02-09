import React from 'react';
import preguntas from "../questions"

const score = ({puntuacion})=>{
    return(
       <div>
          {/*Aqui muestra la puntuacion de preguntas acertadas*/}
          <span>
            {" "}
            Obtuviste {puntuacion} de {preguntas.length}{" "}
          </span>
        </div>          
    );
}

export default score;