/* eslint-disable no-console */
import "./styles.css";

const numeroDeCartas = ["A", "1", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
const palosDeCartas = ["♦", "♠", "♥", "♣"];

function devuelveNumeroRandom() {
  const numeroIndex = Math.floor(Math.random() * numeroDeCartas.length);
  return numeroDeCartas[numeroIndex];
}
function devuelvePaloRandom() {
  const paloIndex = Math.floor(Math.random() * palosDeCartas.length);
  return palosDeCartas[paloIndex];
}

function aplicarColorPalo(palo) {
  const paloArribaElemento = document.getElementById("palo-arriba");
  const paloAbajoElemento = document.getElementById("palo-abajo");

  if (palo === "♥" || palo === "♦") {
    paloAbajoElemento.style.color = "red";
    paloArribaElemento.style.color = "red";
  } else {
    paloAbajoElemento.style.color = "black";
    paloArribaElemento.style.color = "black";
  }
}

function generarCartaRandom() {
  const resultadoNumeroRandom = devuelveNumeroRandom();
  const resultadoPaloRandom = devuelvePaloRandom();

  // Asignar los resultados al DOM (por ID)
  document.getElementById("numero").innerHTML = resultadoNumeroRandom;
  document.getElementById("palo-arriba").innerHTML = resultadoPaloRandom;
  document.getElementById("palo-abajo").innerHTML = resultadoPaloRandom;

  aplicarColorPalo(resultadoPaloRandom);
}

function aplicarDimensiones() {
  const anchocarta = document.getElementById("anchocarta").value;
  const altocarta = document.getElementById("altocarta").value;
  const card = document.getElementById("card");

  if (altocarta && anchocarta) {
    card.style.width = altocarta + "px";
    card.style.height = anchocarta + "px";
  }
}

setInterval(generarCartaRandom, 10000);

window.onload = () => {
  generarCartaRandom();

  const botonCartas = document.getElementById("botonCartas");
  botonCartas.addEventListener("click", () => {
    generarCartaRandom();
    aplicarDimensiones();
  });
};
