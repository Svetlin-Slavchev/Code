var Data;
(function (Data) {
    var ExportedClass = (function () {
        function ExportedClass(height, width) {
            this.height = height;
            this.width = width;
        }
        return ExportedClass;
    }());
    Data.ExportedClass = ExportedClass;
})(Data || (Data = {}));
// Access ExportedClass outside Data namespase
var myVar = new Data.ExportedClass(2, 3);
// Javascript example
// Immediately-invoked function expression. 
(function () {
    alert('test');
})();
// Make namespaces short(similat to usings in c#)
var Test;
(function (Test) {
    var Test2;
    (function (Test2) {
        var Test3;
        (function (Test3) {
            var Pesho = (function () {
                function Pesho() {
                }
                return Pesho;
            }());
            Test3.Pesho = Pesho;
        })(Test3 = Test2.Test3 || (Test2.Test3 = {}));
    })(Test2 = Test.Test2 || (Test.Test2 = {}));
})(Test || (Test = {}));
// Declare the namespace.
var TestImport = Test.Test2.Test3;
// Use declared short key for this namespace.
var someVar = new TestImport.Pesho();
// to use some module in another module, we need to create reference to him. Just drag and drop required module. Examle:
/// <reference path="interfaces.ts" />
// AMD - Asynchronous Module Definition
// we need require.js
// Install-Package RequireJS 
//# sourceMappingURL=modules.js.map