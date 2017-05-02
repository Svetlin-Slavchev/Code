
namespace Data {
    export class ExportedClass {
        constructor(public height: number, public width: number) { }
    }
}

// Access ExportedClass outside Data namespase
var myVar = new Data.ExportedClass(2, 3);


// Javascript example
// Immediately-invoked function expression. 
(function () {
    alert('test')
})()



// Make namespaces short(similat to usings in c#)
namespace Test.Test2.Test3 {
    export class Pesho {

    }
}

// Declare the namespace.
import TestImport = Test.Test2.Test3;

// Use declared short key for this namespace.
var someVar = new TestImport.Pesho();

// to use some module in another module, we need to create reference to him. Just drag and drop required module. Examle:
/// <reference path="interfaces.ts" />

// AMD - Asynchronous Module Definition
// we need require.js
// Install-Package RequireJS