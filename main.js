'use strict';

// Generar un número aleatorio del 1 al 6
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función que se ejecuta al hacer click
const button = document.querySelector(".js-btn");
const resultElement = document.querySelector(".js-result"); // Constante para el elemento con clase .js-result

button.addEventListener('click', toPlay();

function setTextContent(text) {
  resultElement.innerText = text;
}

function toPlay() {
  const chosenNumber = document.querySelector(".js-num").value;
  const bet = document.querySelector(".js-bet").value;
  let moneyA = document.querySelector(".js-money").innerText;
  
  if (chosenNumber || bet) {
    setTextContent("");
    return;
  }
  
  if (chosenNumber < 1 || chosenNumber > 6) {
    setTextContent("");
    return;
  }
  
  if (bet > moneyA) {
    setTextContent("");
    return;
  }
  
  const randomNumber = getRandomNumber();
  
  if (chosenNumber === randomNumber) {
    moneyA = parseInt(moneyA) + parseInt(bet) * 2;
    setTextContent("Has ganado el doble de lo apostado ");
  } else {
    moneyA -= bet;
    setTextContent("Has perdido lo apostado ");
  }
  
  document.querySelector(".js-money").innerText = moneyA + "€";
}


