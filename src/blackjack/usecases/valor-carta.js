/**
 * Obtiene el valor de la carta solicitada.
 * 
 * @param {String} carta elemento del deck. 
 * @returns valor del elemento. 
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}