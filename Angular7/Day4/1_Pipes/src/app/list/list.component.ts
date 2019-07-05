import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    @Input() personList: Array<string>;
    selectedPerson: string;

    constructor() {
    }

    ngOnInit() { }

    select(p: string, e: Event) {
        this.selectedPerson = p;
        e.preventDefault();
    }
}