//Fórmula de Bhaskara
//Receber parametros "a", "b", "c"

function  executandoBhaskara(ax, bx, c) {
    let valorDeX = [];

    delta = Math.pow(bx, 2) - 4 * ax * c;
    
    let divisaoPorA = 2 * ax
    let raizQuadrada = -bx + Math.sqrt(delta)
    let ValorX1 = raizQuadrada / divisaoPorA

    let raizQuadradaNegativa = -bx - Math.sqrt(delta)
    let ValorX2 = raizQuadradaNegativa / divisaoPorA
    if (ValorX1 > 0) {
        valorDeX.push(`X1 = ${ValorX1}`)
    } else {
        valorDeX.push(`Valor X1 negativo!  ${ValorX1}`)
    }

    if (ValorX2 > 0) {
        valorDeX.push(`X2 = ${ValorX2}`)
    } else {
        valorDeX.push(`Valor X2 negativo ${ValorX2}`)
    }

    return valorDeX
}

console.log(executandoBhaskara(-4, 10, 24))