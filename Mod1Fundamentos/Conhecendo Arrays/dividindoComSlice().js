const alunos = ['Matheus', 'Letica', 'Lana', 'Salomao', 'Vinicius', 'Heitor', 'Leonardo', 'Carol'];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(`Sala 1: ${sala1.join(" - ")}`)
console.log(`Sala 2: ${sala2.join(" - ")}`)