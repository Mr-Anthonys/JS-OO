const DepFuncionarios = require('./departamentosEmpresa.json');

const todosOsFuncionarios = DepFuncionarios.flatMap(dep => dep.funcionarios);
console.log(todosOsFuncionarios);

function procuraFuncionario(lista, propriedade, id) {
    return lista.find((func) => {
        if (func[propriedade] === id) {
            return func[propriedade];
        }
    })
}


const funcionarioEncontrado = procuraFuncionario(todosOsFuncionarios, 'id', 201)
console.log(funcionarioEncontrado);
