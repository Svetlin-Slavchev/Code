var Car = (function () {
    // constructor
    function Car(engineData) {
        this.engine = engineData;
    }
    // functions
    Car.prototype.start = function () {
        return "Started" + this.engine;
    };
    return Car;
}());
// Shortcut
var Car2 = (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    return Car2;
}());
// Class with properties
var CarWithProperties = (function () {
    // constructor
    function CarWithProperties(engineData) {
        this.engine = engineData;
    }
    Object.defineProperty(CarWithProperties.prototype, "engine", {
        // properties
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined) {
                throw 'Some exception!';
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    // functions
    CarWithProperties.prototype.start = function () {
        return "Started" + this.engine;
    };
    return CarWithProperties;
}());
//# sourceMappingURL=classes.js.map