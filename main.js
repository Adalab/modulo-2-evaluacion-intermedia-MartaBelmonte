'use strict';

// Inicializar el historial de juegos y estadísticas
let historialJuegos = 0;
let totalDineroGanadoPerdido = 0;

// Función que se ejecuta al hacer click en el botón de jugar
const button = document.querySelector(".js-btn");
const resultElement = document.querySelector(".js-result");
const newBetButton = document.querySelector(".js-new-bet-btn");

button.addEventListener('click', toPlay);
newBetButton.addEventListener('click', nuevaApuesta);

function setTextContent(text) {
  resultElement.innerText = text;
}

function toPlay() {
  const chosenNumber = parseInt(document.querySelector(".js-num").value);
  const bet = parseInt(document.querySelector(".js-bet").value);
  let moneyA = parseInt(document.querySelector(".js-money").innerText);

  if (!chosenNumber || !bet) {
    setTextContent("Por favor, introduce un número y una apuesta.");
    return;
  }

  if (chosenNumber < 1 || chosenNumber > 6) {
    setTextContent("El número elegido debe estar entre 1 y 6.");
    return;
  }

  if (bet > moneyA) {
    setTextContent("No tienes suficiente dinero para realizar esta apuesta.");
    return;
  }

  const randomNumber = getRandomNumber(6);

  if (chosenNumber === randomNumber) {
    moneyA += bet * 2;
    setTextContent("¡Has ganado el doble de lo apostado!");
  } else {
    moneyA -= bet;
    setTextContent("Has perdido la apuesta.");
  }

  document.querySelector(".js-money").innerText = moneyA + "€";

  // Incrementar el número total de juegos jugados y el saldo ganado/perdido
  historialJuegos++;
  totalDineroGanadoPerdido += (chosenNumber === randomNumber) ? bet : -bet;

  // Verificar si el saldo llega a 0€
  if (moneyA === 0) {
    // Mostrar la información
    setTextContent("Tu saldo ha llegado a 0€. ¡Gracias por jugar!");
    // Deshabilitar el botón de jugar para evitar más apuestas
    button.disabled = true;

    // Mostrar el botón de nueva apuesta
    newBetButton.style.display = "block";
    // Actualizar las estadísticas
    actualizarEstadisticas();
  }
}

// Función para realizar una nueva apuesta
function nuevaApuesta() {
  // Recargar la página para reiniciar el saldo
  location.reload();
}

// Función para actualizar las estadísticas en la interfaz
function actualizarEstadisticas() {
  document.querySelector(".js-total-juegos").innerText = historialJuegos;
  document.querySelector(".js-total-dinero").innerText = totalDineroGanadoPerdido + "€";
}

// Función para generar un número aleatorio del 1 al 6
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
















