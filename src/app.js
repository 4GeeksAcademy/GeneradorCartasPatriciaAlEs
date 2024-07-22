/* eslint-disable no-console */
import "./style.css";

const numeroDeCartas = ["A", "1", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];

window.onload = () => {
  const resultadoNumeroRandom = devuelveNumeroRandom();
  const resultadoPaloRandom = devuelvePaloRandom();

  // Asignar los resultados al DOM (por ID)
  document.getElementById("numero").innerHTML = resultadoNumeroRandom;
  document.getElementById("palo-arriba").innerHTML = resultadoPaloRandom;
  document.getElementById("palo-abajo").innerHTML = resultadoPaloRandom;

  aplicarColorPalo(resultadoPaloRandom);
};
function devuelveNumeroRandom() {
  const numeroIndex = Math.floor(Math.random() * numeroDeCartas.length);
  return numeroDeCartas[numeroIndex];
}

function devuelvePaloRandom() {
  const palosDeCartas = {
    rombos: "♦",
    corazones: "♥",
    picas: "♠",
    treboles: "♣"
  };
  // Obtener las claves(key) del objeto en un array
  const clavesDelObjetoPalos = Object.keys(palosDeCartas);
  // Seleccionar una clave(key) aleatoria del array
  const claveAleatoriaPalos =
    clavesDelObjetoPalos[
      Math.floor(Math.random() * clavesDelObjetoPalos.length)
    ];
  // Devuelve el valor correspondiente a la clave(key) aleatoria
  return palosDeCartas[claveAleatoriaPalos];
}

function aplicarColorPalo(palo) {
  const paloArribaElemento = document.getElementById("palo-arriba");
  const paloAbajoElemento = document.getElementById("palo-abajo");

  if (palo === "♥" || palo === "♠") {
    paloAbajoElemento.style.color = "red";
    paloArribaElemento.style.color = "red";
  }
}
