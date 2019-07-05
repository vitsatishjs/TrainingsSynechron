var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(id, make) {
        this._id = id;
        this._make = make;
    }
    Vehicle.prototype.start = function () {
        return "Vehicle with id: " + this._id + ", make as " + this._make + " started.";
    };
    return Vehicle;
}());
var FourWheeler = (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(id, make, model) {
        if (make === void 0) { make = "Honda"; }
        if (model === void 0) { model = "Civic"; }
        var _this = _super.call(this, id) || this;
        _this._make = make;
        _this._model = model;
        return _this;
    }
    FourWheeler.prototype.start = function () {
        var baseRes = _super.prototype.start.call(this);
        return baseRes + ", model is: " + this._model;
    };
    FourWheeler.prototype.move = function () {
        return "Moving like a car.";
    };
    return FourWheeler;
}(Vehicle));
var v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());
