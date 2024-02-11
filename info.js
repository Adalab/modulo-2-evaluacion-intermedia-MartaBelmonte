'use strict';

// Función para registrar un nuevo juego en el historial
function registrarJuego(resultado, cantidadApostada, cantidadGanadaPerdida) {
  // Obtener el historial de juegos almacenado en el almacenamiento local
  let historial = JSON.parse(localStorage.getItem('historial')) || [];

  // Crear un objeto para representar el juego actual
  const juego = {
    resultado: resultado,
    cantidadApostada: cantidadApostada,
    cantidadGanadaPerdida: cantidadGanadaPerdida
  };

  // Agregar el juego al historial
  historial.push(juego);

  // Actualizar el historial en el almacenamiento local
  localStorage.setItem('historial', JSON.stringify(historial));
}

