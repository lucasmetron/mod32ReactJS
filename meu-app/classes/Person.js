
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`Olá! Meu nome é ${this.name} e tenho ${this.age} anos de idade.`);
    }
}

module.exports = Person;