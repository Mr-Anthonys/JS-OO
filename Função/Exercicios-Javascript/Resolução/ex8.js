let pontos = [10, 20, 20, 8, 25, 3, 0, 30, 1]


function pontosPorTemporada(pontos) {
    let quebraRecorde = 0
    pontos.forEach(ponto => {
        if (ponto >= pontos) {
            maiorPontos.push(ponto);
            quebraRecorde += 1
        } 
    });
}

pontosPorTemporada([1])