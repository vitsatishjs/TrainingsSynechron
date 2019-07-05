abstract class Vehicle {
    private _id: number;
    protected _make: string;

    constructor(id: number, make?: string) {
        this._id = id;
        this._make = make;
    }

    start() {
        return `Vehicle with id: ${this._id}, make as ${this._make} started.`
    }

    abstract move(): string;
}

class FourWheeler extends Vehicle {
    private _model: string;

    constructor(id: number, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }

    start() {
        var baseRes = super.start();
        return `${baseRes}, model is: ${this._model}`;
    }

    move() {
        return "Moving like a car.";
    }
}

// var v = new FourWheeler(1, "Ford", "Mustang");
// console.log(v.start());
// console.log(v.move());

var v: Vehicle = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());