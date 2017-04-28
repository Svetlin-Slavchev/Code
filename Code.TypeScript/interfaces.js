// Interfaces
var realFunc = function (x) { return x * x; };
// Implementation
var p = {
    name: 'Pesho',
    age: 21,
    kids: 4,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYonger: function (years) {
        this.age -= years;
    },
    greet: function (message) {
        return message + ', ' + this.name;
    }
};
// test it.
var pets = p.calcPets();
console.log(pets);
//# sourceMappingURL=interfaces.js.map