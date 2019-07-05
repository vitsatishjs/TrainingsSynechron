import { Component, OnInit } from '@angular/core';
import { IPerson } from '../models/person.model';

@Component({
    selector: 'model-based',
    templateUrl: 'model-based.component.html'
})

export class ModelBasedFormComponent implements OnInit {
    constructor() { }

    person: IPerson;

    ngOnInit() {
        this.person = {
            firstname: "",
            lastname: "",
            address: {
                city: "",
                zip: 0
            }
        };
    }

    logForm() {
        console.log(this.person);
        // COde to send this person to service
    }
}