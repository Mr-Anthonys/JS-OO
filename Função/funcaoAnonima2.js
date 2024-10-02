const soma = (a, b) =>;

function executar(funcao) {
    multi = (min = a, max = b) => {
        return Math.random(min - max) + min
    }
    return funcao(multi());
}

executar (soma(2, 3));