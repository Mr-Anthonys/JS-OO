let valor1 = 0
let abacate
let valor2 = "10"

console.log("valor1 é do tipo:", typeof valor1)
console.log("abacate é do tipo:", typeof abacate)
console.log("valor2 é do tipo:", typeof valor2)

console.log(Number(true));
console.log(Number(false));


const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado)



const calculadoraSimples = (a, b, operacao) => {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtracao') {
        return a - b;
    } else if (operacao === 'multiplicacao') {
        return a * b;
    } else if (operacao === 'divisao') {
        return a / b;
    } else {
        return 'Operação não reconhecida';
    }
};

console.log(calculadoraSimples(2, 2, 'multiplicacao'));



const meuArray = [0, 1, 2, 3];

const soma = (meuArray[0] + meuArray[1] + meuArray[2] + meuArray[3]);
const media = (soma / meuArray.length)
console.log(`soma do array: ${soma}.
media do array: ${media}.`);
