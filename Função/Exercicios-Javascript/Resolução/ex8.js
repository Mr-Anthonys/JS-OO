let pontos = ('10, 20, 20, 8, 25, 3, 0, 30, 1')


function pontosPorTemporada(pontos) {
    let pontuacao = pontos.split(", ")
    let maiorPontuacao = Number(pontuacao[0])
    let menorPontuacao = Number(pontuacao[0])
    let quebraRecorde = 0
    let piorJogo = 1

    for (let i = 1; i < pontuacao.length; i++) {
        let ponto = Number(pontuacao[i])
        if (ponto > maiorPontuacao) {
            quebraRecorde++
            maiorPontuacao = ponto
        } else if (ponto < menorPontuacao) {
            piorJogo = i + 1
            menorPontuacao = ponto
        }
    }

    return [quebraRecorde, piorJogo]
}

console.log(pontosPorTemporada(pontos));