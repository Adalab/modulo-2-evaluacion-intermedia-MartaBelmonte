'use strict';

// Función para calcular el número total de juegos jugados
function calcularTotalJuegos() {
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  return historial.length;
}

// Función para calcular la cantidad total de dinero ganada o perdida
function calcularTotalDinero() {
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  let total = 0;
  historial.forEach(juego => {
    if (juego.resultado === 'ganado') {
      total += juego.cantidadGanadaPerdida;
    } else {
      total -= juego.cantidadGanadaPerdida;
    }
  });
  return total;
}

// Ejemplo de uso: obtener el número total de juegos y la cantidad total de dinero ganada o perdida
const totalJuegos = calcularTotalJuegos();
const totalDinero = calcularTotalDinero();
console.log('Total de juegos jugados:', totalJuegos);
console.log('Cantidad total de dinero ganada/perdida:', totalDinero);

// Verificar si el saldo llega a 0€
const saldoActual = parseInt(document.querySelector(".js-money").innerText);
if (saldoActual === 0) {
  const historialJuegos = calcularTotalJuegos();
  const totalDineroGanadoPerdido = calcularTotalDinero();
  console.log('Número total de juegos jugados:', historialJuegos);
  console.log('Cantidad total de dinero ganada/perdida:', totalDineroGanadoPerdido);
}
