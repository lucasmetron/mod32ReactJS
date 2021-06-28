// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greetings() {
//         console.log(`Olá, tudo bem? Meu nome é ${this.name} e tenho ${this.age} anos de idade.`);
//     }

//     teste() {
//         console.log("teste", this.name)
//     }

// }

// let joao = new Person('João', 25);
// let igor = new Person('Igor', 17);

// class Alumn extends Person {
//     constructor(name, age, turma) {
//         super(name, age);
//         this.turma = turma;
//     }

//     greetings() {
//         console.log(`Olá, tudo bem? Meu nome é ${this.name} e tenho ${this.age} anos de idade. E estou na turma ${this.turma}`);
//     }
// }

const Person = require('./Person');
const Alumn = require('./Alumn');


let lais = new Person('Laís', 22)
lais.greetings();

let lucas = new Alumn('Lucas', 25, '1001');
lucas.greetings();