function calcularSoma(a, b = 2) {
    soma = Math.random() * (a + b);
    return soma;
}

console.log(calcularSoma(2).toFixed(2))