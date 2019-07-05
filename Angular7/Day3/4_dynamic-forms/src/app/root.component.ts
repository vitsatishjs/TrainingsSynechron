import { Component } from "@angular/core";
import { person } from "./models/person.model";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Angular Forms</h1>
            </div>

            <d-form [data]=user></d-form>
            <hr/>
            <d-form [data]=person></d-form>
        </div>
    `
})
export class RootComponent {
    person: any;
    user = {
        username: {
            label: 'Username',
            value: '',
            type: 'text',
            validation: {
                required: true
            }
        },
        password: {
            label: 'Password',
            value: '',
            type: 'password',
            validation: {
                required: true
            }
        }
    }

    constructor() {
        this.person = person;
    }
}