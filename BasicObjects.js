// how to construct a simple Class in ECMAScript

class Dog { 
    constructor(name) {
        this.name = name
    }
    
    bark() {
        return 'Hello, I am ' + this.name + '.'
    }
}
    
const Peanut = new Dog('Peanut');

a = Peanut.bark()
console.log(a);

class Bichon extends Dog { 
        hello() { return super.bark() + ' I am a Dog.'}
    }
    
const Fifi = new Bichon('Fifi');
b = Fifi.hello();
console.log(b); 
