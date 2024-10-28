/* 
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function executandoOperacoes(a, b) {
    return {
        soma: ` ${a + b}`,
        multiplicacao: ` ${a * b}`,
        divisao: ` ${a / b}`

    }
}

console.log(executandoOperacoes(2, 2))