const mesclaSabor = function (fruta) {
    switch (fruta) {
        case 'Banana':
        case 'Aveia':
            sabores = ' Vitamina de banana com aveia'
            break;
        
        case 'Abacate':
        case 'Leite':
            sabores = ' Vitamina de Abacate com leite'
            break;
        default:
            sabores = 'Outros...'
    }

    console.log('Fim da escolha de sabores' + sabores) 
}

mesclaSabor('Banana')


function notasAlunos(nota) {
    switch (nota) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break

        case 8: case 7:
            console.log('Aprovado')
            break

        case 6: case 5: case 4:
            console.log('Recuperação')
            break

        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota Inválida')
    }
}

notasAlunos(2)
notasAlunos(10)
notasAlunos(6)
notasAlunos(11)