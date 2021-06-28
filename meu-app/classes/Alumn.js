
const Person = require('./Person');

class Alumn extends Person {
    constructor(nome, age, turma) {
        super(nome, age);
        this.turma = turma;
    }

    greetings() {
        console.log(`
        Nome: ${this.name}
        Idade:${this.age}
        Turma:${this.turma}`)
    }
}

module.exports = Alumn;