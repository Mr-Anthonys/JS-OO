let word = "Sargento"
let number = word.length


function getFatorial(number) {
    let fatorial = 1;

    for (let i = number; i >= 1; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(`Fatorial de ${word} (${number}): ${getFatorial(number)}`)
