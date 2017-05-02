// Any
var any1;
var any2;
var any2 = 'pesho';
// Number
var num1;
var num2 = 3;
// Boolean
var isBool = true;
var isBool2 = true;
// String
var text = 'some text';
var text2;
var text3 = 'some text';
// Arrays
var names = ['pesho', 'pesho2', 'pesho3'];
// null
var text4 = null;
var num3 = null;
// undefined
var num1;
var pesho = undefined;
// ... (like c# params)
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var someFunc = function () {
    var accessories = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        accessories[_i] = arguments[_i];
    }
};
//# sourceMappingURL=grammar.js.map