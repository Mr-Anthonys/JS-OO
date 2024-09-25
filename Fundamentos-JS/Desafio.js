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


function classificaHeroi(heroi) {
    switch (heroi) {
        case 1:
            nivel = 10.000;
            console.log(nivel)
    }
}



/*

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual seu heroi? ", classificaHeroi)

*/

