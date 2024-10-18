function calcularJurosSimples(inicial, taxa, tempo) {
    const capitalInicial = inicial; 
    const taxaJuros = taxa;
    const tempoAplicado = tempo;

    let calculoSimples = Number(((taxaJuros * capitalInicial) * tempoAplicado)).toFixed()
    console.log(`R$ ${calculoSimples.replace(".", ",")}`)
}
calcularJurosSimples(10, 0.1, 12)