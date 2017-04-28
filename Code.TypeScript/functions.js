// functions
var myFunc = function (h, w) {
    return h * w;
};
var myFunc2 = function (h, w) { return h * w; };
//-------------------
// Void functions
var voidFunc;
voidFunc = function (message) {
    console.log(message);
};
voidFunc('hello!');
//-------------------
// With optional parameter.
var opParamFunc;
opParamFunc = function (message) {
    console.log(message);
};
opParamFunc();
opParamFunc('opParamFunc!');
//-------------------
// Pass object to functions
var objectFunc;
objectFunc = function (someObj) {
    console.log(someObj.prop1 + someObj.prop2);
};
var someObject = { prop1: 20, prop2: 30 };
objectFunc(someObject);
//# sourceMappingURL=functions.js.map