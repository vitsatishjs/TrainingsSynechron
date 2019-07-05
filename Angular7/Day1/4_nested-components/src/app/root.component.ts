import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <c-one>Component One Loading...</c-one>
        <c-two>Component Two Loading...</c-two>
        <hr>
        <c-one>Component One Loading Again...</c-one>
    `
})
export class RootComponent {

}