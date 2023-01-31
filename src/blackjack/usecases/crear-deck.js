import _ from 'underscore';

/**
 * Obtiene un deck con las cartas revueltas o barajeadas.
 * 
 * @param {Array<String>} tiposDeCarta arreglo de tipos de carta 
 * @param {Array<String>} tiposEspeciales arreglo de tipos de cartas especiales
 * @returns {Array<String>} regresa una nueva baraja
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length ===0) 
        throw new Error('TiposDeCarta es obligatorio como arreglo de String');
    if(!tiposEspeciales || tiposEspeciales.length ===0) 
        throw new Error('TiposEspeciales es obligatorio como arreglo de String');

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}