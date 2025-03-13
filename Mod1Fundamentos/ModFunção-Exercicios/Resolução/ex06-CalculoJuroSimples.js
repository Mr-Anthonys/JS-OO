function calcularJurosSimples(inicial, taxa, tempo) {

    const calculo = taxa * inicial * tempo
    const resultado = Number(calculo + inicial).toFixed(2)
    console.log(`R$ ${resultado.replace(".", ",")}`)
}
calcularJurosSimples(10, 0.01, 12)


function calcularJurosComposto(inicial, taxa, tempo) {
    const calculo =  1 + taxa
    const montante = (Math.pow(calculo, tempo) * inicial).toFixed(2)
    console.log(`R$ ${montante}`)
}
calcularJurosComposto(10, 0.01, 12)