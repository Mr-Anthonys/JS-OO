// let i = 0;

/*
while (i < 3) {
    console.log('Olá');
    i++;
} 
*/

// do {
//     console.log('OPA');
//     i++
// } while (i < 2);


function getRandomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// while (opcao != -1) {
//     opcao = getRandomNumber(-1, 10)
//     console.log(`Opção escolhida foi ${opcao}`)
// }

do {
    opcao = getRandomNumber(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)