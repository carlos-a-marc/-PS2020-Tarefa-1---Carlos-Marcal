
// Passo 2 - Exercicio 1
let pessoa = {
    nome: '',
    idade: 0,
    sexo: '',
    profissão: ''
}

let universidade = {
    nome: '',
    endereco: '',
    nCursos: 0,
    nAlunos: 0
}

let republica = {
    nome: '',
    idade: 0,
    nMoradores: 0
}

// Passo 2 - Exercicio 2

let pessoa1 = {
    nome: 'Pedro',
    idade: 20,
    sexo: 'M',
    profissão: 'Estudante'
}

let pessoa2 = {
    nome: 'Ana',
    idade: 17,
    sexo: 'F',
    profissão: 'Estudante'
}

let pessoa3 = {
    nome: 'Paulo',
    idade: 23,
    sexo: 'M',
    profissão: 'Estudante'
}

let pessoa4 = {
    nome: 'Armando',
    idade: 17,
    sexo: 'M',
    profissão: 'Estudante'
}

let pessoa5 = {
    nome: 'André',
    idade: null,
    sexo: 'M',
    profissão: 'Garçom'
}

let republica1 = {
    nome: 'Orfanato',
    idade: 10,
    nMoradores: 5
}

let curso1 = {
    nome: 'Engenharia da Computação',
    nPeriodos: 10,
    cargaHora: 3630
}

// Passo 2 - Exercicio 3
pessoa5.checarIDs = function (pessoa) {
    if (pessoa.idade >= 18) {
        return `${pessoa.nome} pode tomar cerveja.`;
    }
    else {
        return `${pessoa.nome}, vai tomar coca-cola.`;
    }
}

