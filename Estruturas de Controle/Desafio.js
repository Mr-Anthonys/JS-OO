/* 
Classificador Nível de Heroi

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estrturas de decisões

**Objetivo**

Crie uma variável para armazenar o nome e a quantidade de 
experiência (XP) de um heroi, depois utilize uma estrutura 
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 8.000 = Platina Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

*** Saída 
Ao final deve se exibir uma mensagem:
"O heroi de nome **{nome}** está no nível **{nivel}**"

*/
console.log('Os XPs vao de 1.000 a 20.000, sendo: ');
for (let i = 1000; i < 20000; i = i + 1000) {
    console.log(`level ${i}`)
}

let heroi = 'SuperPatria';

function classificaHeroi(XP) {
    if (XP <= 1000) {
        patente = 'Bronze'
    } else if (XP >= 1001 && XP <= 2000) {
        patente = 'Prata Ouro'
    } else if (XP >= 2001 && XP <= 8000) {
        patente = 'Platina Diamante'
    } else if (XP >= 8001 && XP <= 9000) {
        patente = 'Ascendente'
    } else if (XP >= 9001 && XP <= 10000) {
        patente = 'Imortal'
    } else {
        patente = 'Radiante'
    }

    return patente;
};

console.log(`O heroi de nome ${heroi} esta no nivel ${classificaHeroi(19000)}`);





/*

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual seu heroi? ", classificaHeroi)

*/

