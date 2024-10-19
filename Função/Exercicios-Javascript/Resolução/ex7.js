//Fórmula de Bhaskara
//Receber parametros "a", "b", "c"

function  executandoBhaskara(ax, bx, c) {
    let valorDeX = [];

    delta = Math.pow(bx, 2) - 4 * ax * c;

    console.log(delta)
    
    let ValorX1 = Number((-bx + Math.sqrt(delta)) / 2 * ax).toFixed(1)
    let ValorX2 = Number((-bx - Math.sqrt(delta)) / 2 * ax).toFixed(1)

    if (ValorX1 > 0) {
        valorDeX.push(`X1 = ${ValorX1}`)
    } else {
        valorDeX.push('Valor X1 negativo!')
    }

    if (ValorX2 > 0) {
        valorDeX.push(`X2 = ${ValorX2}`)
    } else {
        valorDeX.push('Valor X2 negativo!')
    }

    return valorDeX
}

console.log(executandoBhaskara(1, -4, 10))