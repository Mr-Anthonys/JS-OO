function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let ramdomNumber = Math.random() * (max - min) + min;
    return ramdomNumber;
}

let isInteger = getRandomNumber(1, 100);

function verificarNumero(isInteger) {
    console.log(isInteger)
    isInteger = parseInt(isInteger)
    console.log(isInteger)
    let resto = isInteger % 3
    if (resto == 0) {
        return console.log(`${true} --- numero: ${isInteger}`);
    } else {
        return console.log(`${false} --- numero: ${isInteger}`);
    }
}


verificarNumero(isInteger)