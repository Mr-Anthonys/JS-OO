const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (contador in nums) {
    if (contador == 6) {
        console.log(`Achei o numero ${contador}, saindo!!!`)
        break;
    }

console.log(`Executando... ${contador}`)
}

console.log('FIM')

const NUMS = [1, 2, 3, 4, 5]
for (y in NUMS) {
    if (y == 3) {
        console.log(`Achamos o ${y}, continuando...`)
        continue;
    }
    console.log(y)
}


const erros = [1, 2, 3]

INICIO: for (e in erros) {
    for (n in erros) {    
        if (e == 2 && n == 3) {
            break INICIO
            console.log('Voltando do inicio!' + e + n)
        }
    }
}