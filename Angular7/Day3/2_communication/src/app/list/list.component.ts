import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    @Input() personList: Array<string>;
    selected: string;

    constructor() {
    }

    ngOnInit() { }

    select(p: string, e: Event) {
        this.selected = p;
        e.preventDefault();
    }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'list',
//     templateUrl: 'list.component.html',
//     inputs: ['personList']
// })

// export class ListComponent implements OnInit {
//     personList: Array<string>;
//     selected: string;

//     constructor() {
//     }

//     ngOnInit() { }

//     select(p: string, e: Event) {
//         this.selected = p;
//         e.preventDefault();
//     }
// }