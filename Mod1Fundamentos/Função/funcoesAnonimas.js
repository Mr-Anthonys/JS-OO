const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function ( a, b, operacao = soma) {
    console.log(operacao(a, b));
}

const resolvendoSoma = function(x, y, conta = soma) {
    console.log(conta(x, y));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
})

resolvendoSoma(2, 3, function (x, y) {
    return x * y;
})