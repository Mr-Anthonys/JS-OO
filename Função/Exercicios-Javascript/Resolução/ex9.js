function getRamdomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

let notaAluno = getRamdomNumber(1, 100)

function arredondaNota(notaAluno) {
    if (notaAluno < 40 && notaAluno != 38) {
        console.log(`Reprovado com nota: ${notaAluno}`)
    } else if (notaAluno == 38) {
        notaAluno = Math.ceil(notaAluno / 5) * 5
        console.log(`Aprovado com arredondamento: ${notaAluno}`)
    } else if (notaAluno > 40 && notaAluno != Math.ceil(notaAluno / 5) * 5) {
        notaAluno = Math.ceil(notaAluno / 5) * 5;
        console.log(`Aprovado, porém arredondado: ${notaAluno}`)
    } else {
        notaAluno = notaAluno
        console.log(`Parabéns!! Nota não arredondada: ${notaAluno}`)
    }
}

arredondaNota(notaAluno)