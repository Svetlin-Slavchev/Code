class Car {
    // fields
    engine: string;

    // constructor
    constructor(engineData: string) {
        this.engine = engineData;
    }
    // functions
    start() {
        return "Started" + this.engine;
    }
}


// Shortcut
class Car2 {
    constructor(public engine: string) { }
}


// Class with properties
class CarWithProperties {
    // fields
    _engine: string;

    // constructor
    constructor(engineData: string) {
        this.engine = engineData;
    }

    // properties
    get engine(): string {
        return this._engine
    }

    set engine(value: string) {
        if (value == undefined) {
            throw 'Some exception!';
        }
        this._engine = value;
    }

    // functions
    start() {
        return "Started" + this.engine;
    }
}