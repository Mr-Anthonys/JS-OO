function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const notaas = [1, 2, 3]

function getMedia(arrayNotas) {
    let notas = (arrayNotas.length)
    
    if (notas == 4) {
        const media = (arrayNotas[0] + arrayNotas[1] + arrayNotas[2] + arrayNotas[3]) / notas;
        console.log(`Media 4 notas: ${media}.`)
    } else if (notas < 4) {
        for (let i = arrayNotas.length; i < 4; i++) {
            arrayNotas.push(getRandomInt(1, 10));
            notas = arrayNotas.length
        }
        if (notas == 4) {
            const media = (arrayNotas[0] + arrayNotas[1] + arrayNotas[2] + arrayNotas[3]) / notas;
            console.log(`Media 4 notas: ${media}.
            nota1: ${arrayNotas[0]} 
            nota2: ${arrayNotas[1]}
            nota3: ${arrayNotas[2]}
            nota4: ${arrayNotas[3]}`)
        } else {
            console.log("Erro");
        }
    }
}

getMedia(notaas)