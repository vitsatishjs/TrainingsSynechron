namespace dev1 {
    export class Employee {
        name: string;

        constructor(n: string) {
            this.name = n;
        }

        getName() {
            return this.name;
        }

        setName(n: string) {
            this.name = n;
        }
    }

    var e1 = new Employee("Manish");
    console.log(e1.getName());
    e1.setName("Abhijeet");
    console.log(e1.getName());

    var e2 = new Employee("Subodh");
    console.log(e2.getName());
    e2.setName("Ramakant");
    console.log(e2.getName());
}

