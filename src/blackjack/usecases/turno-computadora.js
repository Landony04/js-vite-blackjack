import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 *
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HtmlElement} puntosHtml elemento HTML para mostrar los puntos
 * @param {HtmlElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHtml,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios");
  if (!deck) throw new Error("El deck es necesarios");
  if (!puntosHtml) throw new Error("El deck es necesarios");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml.innerText = puntosComputadora;

    const imgCarta = crearCartaHtml(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
