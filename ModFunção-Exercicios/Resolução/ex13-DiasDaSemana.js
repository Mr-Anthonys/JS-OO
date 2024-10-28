const getRandomNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

let dia = getRandomNumber(1, 7)

function diasDaSemana(dia) {
    switch (dia) {
        case 1:
            console.log(`1 - Domingo (Fim de semana).`)
            break;
        case 2:
            console.log(`2 - Segunda-feira (útil)`)
            break;
        case 3:
            console.log(`3 - Terça-feira (útil)`)
            break;
        case 4:
            console.log(`4 - Quarta-feira (útil)`)
            break;
        case 5:
            console.log(`5 - Quinta-feira (útil)`)
            break;
        case 6:
            console.log(`6 - Sexta-feira (útil)`)
            break;
        case 7:
            console.log(`7 - Sábado (Fim de Semana)`)
            break;
        default:
            console.log(`Dia inválido!`)
    }
}

diasDaSemana(dia)