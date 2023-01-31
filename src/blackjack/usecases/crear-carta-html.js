
/**
 * 
 * @param {String} carta carta del deck
 * @returns {HTMLImageElement} imagen de retorno 
 */
export const crearCartaHTMl = (carta) =>{
    if(!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}