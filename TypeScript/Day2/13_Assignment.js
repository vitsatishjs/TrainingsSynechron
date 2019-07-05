var Manager = (function () {
    function Manager() {
        this.name = "Manager";
    }
    return Manager;
}());
var Developer = (function () {
    function Developer() {
        this.name = "Developer";
    }
    return Developer;
}());
var Tester = (function () {
    function Tester() {
        this.name = "Tester";
    }
    return Tester;
}());
var Consultant = (function () {
    function Consultant() {
        this.name = "Consultant";
    }
    return Consultant;
}());
var factory = (function () {
    return {
        createInstance: function (arg) {
            var emp = new arg();
            return emp;
        }
    };
})();
var e1 = factory.createInstance(Manager);
console.log(e1);
var e2 = factory.createInstance(Developer);
console.log(e2);
var e3 = factory.createInstance(Tester);
console.log(e3);
