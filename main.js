function Estudante(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

function Curso(nome, idade, email, curso) {
    this.curso = curso;

    Estudante.call(this, nome, idade, email);
}

function Nota(nome, idade, email, curso, nota) {
    this.nota = nota;

    Curso.call(this, nome, idade, email, curso);
}

const estudante1  = new Nota("Maria", 30, "maria@teste.com", "dev front-end", 8);
const estudante2  = new Nota("João", 21, "joao@teste.com", "dev back-end", 9);
const estudante3  = new Nota("Jonas", 43, "jonas@teste.com", "cientista de dados", 7.7);

console.log(estudante1, estudante2, estudante3);