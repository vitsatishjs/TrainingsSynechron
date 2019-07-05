import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
})

export class RootComponent implements OnInit {
    name: string;
    today: Date;
    flag: boolean;
    pList: Array<string>;

    constructor() { }

    ngOnInit() {
        this.name = "manish sharma";
        this.today = new Date();
        this.flag = true;
        this.pList = ["Manish", "Abhijeet", "Kedar", "Avinash", "Mohit", "Ashish", "Ankur", "Kumud"];
    }

    get format() { return this.flag ? 'fullDate' : 'shortDate' };

    handleClick() {
        this.flag = !this.flag;
    }
}