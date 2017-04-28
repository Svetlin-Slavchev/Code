// Interfaces

// Function can inherite interface
interface FuncInterface {
    (x: number): number;
}

var realFunc: FuncInterface = (x) => x * x;


// Normal interface
interface Person {
    name: string;
    age?: number;
    kids: number;
    calcPets: () => number;
    makeYonger: (years: number) => void;
    greet: (message: string) => string;
}

// Implementation
var p: Person = {
    name: 'Pesho',
    age: 21,
    kids: 4,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYonger: function (years: number) {
        this.age -= years;
    },
    greet: function (message: string) {
        return message + ', ' + this.name;
    }
};

// test it.
var pets = p.calcPets();
console.log(pets);