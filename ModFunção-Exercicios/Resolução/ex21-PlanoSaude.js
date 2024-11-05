/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/


function identificarValorPlano(idadeConveniado) {
    if (idadeConveniado < 10) {
        adicional = `valor adicional: R$80. Ajustado: ${80 * 100}`
    } else if (idadeConveniado >= 10 && idadeConveniado <= 30) {
        adicional = `valor adicional: R$50. Ajustado: ${50 * 100}`
    } else if (idadeConveniado > 30 && idadeConveniado <= 60) {
        adicional = `valor adicional: R$95. Ajustado: ${95 * 100}`
    } else {
        adicional = `valor adicional: R$130. Ajustado: ${130 * 100}`
    }

    return adicional;
}

console.log(identificarValorPlano(61))