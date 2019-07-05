import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'assign-one',
    templateUrl: 'assign-one.component.html'
})

export class AssignmentOneComponent {
    terms: string;

    constructor() {
        this.terms = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis expedita perspiciatis quas possimus at quos blanditiis quisquam? Ipsum aliquam laborum laudantium architecto sapiente suscipit beatae ab atque, quasi error!";
    }
}