function usandoDinheiro(valor) {
    const numeroFormat = valor.toString();
    console.log(numeroFormat.replace(".", ","));
}


usandoDinheiro(`R$${0.30000000000000004.toFixed(2)}`)