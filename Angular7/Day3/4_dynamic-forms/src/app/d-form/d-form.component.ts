import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'd-form',
    templateUrl: 'd-form.component.html'
})

export class DynamicFormComponent implements OnInit {
    @Input() data: any;
    rForm: FormGroup;
    objectProps: any;

    constructor() { }

    ngOnInit() {
        this.objectProps = Object.keys(this.data).map(prop => {
            return Object.assign({}, { key: prop }, this.data[prop]);
        });

        const formGroup: any = {};

        for(const prop of Object.keys(this.data)){
            formGroup[prop] = new FormControl(this.data[prop].value || '',
                this.mapValidations(this.data[prop].validation));
        }

        this.rForm = new FormGroup(formGroup);
    }

    mapValidations(validators: any): any {
        const fValidators = [];

        if (validators) {
            for (const v of Object.keys(validators)) {
                if (v === 'required') {
                    fValidators.push(Validators.required);
                } else if (v === 'min') {
                    fValidators.push(Validators.min(validators[v]));
                }
            }
        }

        return fValidators;
    }

    logForm(){
        console.log(this.rForm);
    }
}