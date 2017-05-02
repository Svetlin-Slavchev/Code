class Auto {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
}

class CarClass extends Auto {
    fourByFour: boolean;
    constructor(engine: string, fourByFour: boolean) {
        super(engine);

        this.fourByFour = fourByFour;
    }
}

// Note:
// super() caling base contructor