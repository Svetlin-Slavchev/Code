// functions
var myFunc = function (h: number, w: number) {
    return h * w;
}

var myFunc2 = (h: number, w: number) => h * w;


//-------------------
// Void functions
var voidFunc: (message: string) => void;

voidFunc = function (message) {
    console.log(message);
}
voidFunc('hello!');


//-------------------
// With optional parameter.
var opParamFunc: (message?: string) => void;

opParamFunc = function (message) {
    console.log(message);
}

opParamFunc();
opParamFunc('opParamFunc!');


//-------------------
// Pass object to functions
var objectFunc: (someObj: { prop1: number, prop2: number }) => void;

objectFunc = function (someObj) {
    console.log(someObj.prop1 + someObj.prop2);
}

var someObject = { prop1: 20, prop2: 30 };
objectFunc(someObject);