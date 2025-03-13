for (let i = 0; i <= 5; i++) {
    console.log(i);
}
let pontosDeVida = 0;
for (let n = 0; n < 10; n++) {
    pontosDeVida += 1;
    console.log(`Tomou a poção mágica ${n}`)
}

console.log(`${pontosDeVida} Totais.`)


//Percorrendo um ARRAY

let notas = [2.5, 7.4, 8.9, 10, 8.5]

for ( let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}



//FOR IN
const herois = ['Superman', 'spiderMan', 'Batman', 'Capitão América']

for (i in herois) {
    console.log(`Posição ${i}, Heroi ${herois[i]}`)
}