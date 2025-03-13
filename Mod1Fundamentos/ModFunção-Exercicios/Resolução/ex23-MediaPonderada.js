function executandoMedia(codigoAluno, nota1, nota2, nota3) {
    const mediaPonderada = (nota1 + nota2 + nota3) / 3;
    console.log(`(${nota1} + ${nota2} + ${nota3}) / 3`)

    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {    
        if (mediaPonderada >= 5) {
            console.log(`Codigo Aluno ${codigoAluno}: Aprovado com nota ${mediaPonderada.toFixed(1)}`)
        } else if (mediaPonderada < 5 && mediaPonderada > 0) {
            console.log(`Codigo Aluno ${codigoAluno}: Reprovado com nota ${mediaPonderada.toFixed(1)}`)
        }
    } else {
        executandoMedia(codigoAluno, nota1, nota2, nota3);
    }
}

executandoMedia(151515, 4, -1, 3)