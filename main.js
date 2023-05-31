'use strict'; 

// Generar un número aleatorio del 1 al 6
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}



// Función que se ejecuta al hacer click"
const boton = document.querySelector(".js-btn");
boton.addEventListener('click', jugar);

function jugar() {
  const numeroElegido = document.querySelector(".js-num").value;
  const apuesta = document.querySelector(".js-apuesta").value;
  const saldoA = document.querySelector(".js-saldo").innerText;
  const resultado = document.querySelector(".js-result").innerText;
  
  if (numeroElegido || apuesta) {
    document.querySelector(".js-result");
    return;
  }
  
  if (numeroElegido < 1 || numeroElegido > 6) {
    document.querySelector(".js-result");
    return;
  }
  
  if (apuesta > saldoA) {
    document.querySelector(".js-result");
    return;
  }
  
  const numeroAleatorio = getRandomNumber();
  
  if (numeroElegido === numeroAleatorio) {
    saldoA += apuesta * 2;
    document.querySelector(".js-result").innerText = "Has ganado el doble de lo apostado ";
  } else {
    saldoA -= apuesta;
    document.querySelector(".js-result").innerText = "Has perdido lo apostado ";
  }
  
  document.querySelector(".js-saldo") saldoA + "€";
}

