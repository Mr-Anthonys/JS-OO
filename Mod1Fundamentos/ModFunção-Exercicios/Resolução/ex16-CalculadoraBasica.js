function calculadoraBasica(a, b, operacao) {
    a = Number(a);
    b = Number(b);
    operacao = operacao.toString()

    switch (operacao) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        default:
            console.log('Operação inválida.')
    }
}

calculadoraBasica(2, 2, '/');