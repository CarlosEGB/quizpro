const preguntas = [
  {
    titulo: "¿Qué no sueles encontrar en un informe de incidencia de software?",
    opciones: [
      {
        textoRespuesta:
          "El nombre y/o la posición organizacional de la persona que plantea el problema.",
        isCorrect: false,
      },
      { textoRespuesta: "Versión del software en prueba.", isCorrect: false },
      {
        textoRespuesta: "Sugerencias sobre cómo solucionar el problema.",
        isCorrect: true,
      },
      { textoRespuesta: "Resultados actuales y esperados.", isCorrect: false },
    ],
  },
  {
    titulo: "¿Quién suele realizar actividades de depuración?",
    opciones: [
      { textoRespuesta: "Desarrolladores", isCorrect: true },
      { textoRespuesta: "Analistas", isCorrect: false },
      { textoRespuesta: "Probadores", isCorrect: false },
      { textoRespuesta: "Administradores de incidencias", isCorrect: false },
    ],
  },
  {
    titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
    opciones: [
      { textoRespuesta: "111", isCorrect: true },
      { textoRespuesta: "12", isCorrect: false },
      { textoRespuesta: "Syntax Error", isCorrect: false },
      { textoRespuesta: "`11`1", isCorrect: false },
    ],
  },
  {
    titulo: "¿En qué año fue creado JavaScript?",
    opciones: [
      { textoRespuesta: "1997", isCorrect: false },
      { textoRespuesta: "2001", isCorrect: false },
      { textoRespuesta: "1987", isCorrect: false },
      { textoRespuesta: "1995", isCorrect: true },
    ],
  },
];

export default preguntas;
