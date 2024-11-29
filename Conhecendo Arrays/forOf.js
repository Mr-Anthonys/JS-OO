const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0

// i percorre array notas e em SomaNotas vai somando as notas o qual vai passando, sendo 10 + 6.5 + 8 + 7.5;
for (let i of notas) {
    somaNotas += i;
}
//Recebe a somaNotas (total da soma das notas) e divide pela quantidade total de indices do array Notas
let media = (somaNotas / notas.length);
console.log(media);