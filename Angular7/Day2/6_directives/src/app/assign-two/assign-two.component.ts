import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'assign-two',
    templateUrl: 'assign-two.component.html'
})

export class AssignmentTwoComponent {
    selected: string;

    constructor() {
        this.selected = "";
    }
}