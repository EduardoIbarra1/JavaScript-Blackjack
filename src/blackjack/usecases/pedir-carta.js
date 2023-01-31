
/**
 * Pide una nueva carta del deck barajeado.
 * 
 * @param {Array<String>} deck arreglo de las cartas barajeadas. 
 * @returns Regresa una carta del arreglo.
 */
export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}