function planoDeTrabalho(plano, salario) {
    plano = plano.toUpperCase()

    switch (plano) {
        case 'A':
            console.log(`Seu salário reajustado: ${salario + (salario * 0.1)}`)
            break;
        case 'B':
            console.log(`Seu salário reajustado: ${salario + (salario * 0.15)}`)
            break;
        case 'C':
            console.log(`Seu salário reajustado: ${salario + (salario * 0.2)}`)
            break;
        default:
            console.log(`Plano inválido.`)
    }
}

planoDeTrabalho('C', 1000)