import { pedirCarta, valorCarta, crearCartaHTMl} from "./";

/**
 * 
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas.
 * @param {Array<String>} deck cartas disponibles.
 */
export const turnoComputadora = ( puntosMinimos , puntosHTML, divCartasComputadora, deck = []) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios')

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTMl(carta);
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}