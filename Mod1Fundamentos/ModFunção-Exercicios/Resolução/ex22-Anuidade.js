/*
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

let anuidadePaga = 0

function pagamentoAnuidade(mes, valor) {
    mes = Math.ceil(mes)

    switch (mes) {
        case 1:
            anuidadePaga = valor * 0.5;
            break;
        case 2:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 3:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 4:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 5:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 6:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 7:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 8:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 9:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 10:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 11:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        case 12:
            anuidadePaga = anuidadePaga * 0.5;
            break;
        default:
            anuidadePaga = "Mês inválido."
    }

    return anuidadePaga;
}

console.log(pagamentoAnuidade(2, 2000))


