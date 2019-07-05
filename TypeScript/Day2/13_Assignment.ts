interface IEmployee {
    id: number;
    name: string;
}

class Manager implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Manager";
    }
}

class Developer implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Developer";
    }
}

class Tester implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Tester";
    }
}

class Consultant {
    name: string;

    constructor() {
        this.name = "Consultant";
    }
}

var factory = (function <T extends IEmployee>() {
    return {
        createInstance: function (arg: { new(): T }): T {
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

// var e4 = factory.createInstance(Consultant);
// console.log(e4);