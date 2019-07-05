import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Content Projection</h1>
            </div>

            <!-- <c-one>
                <h3>From Root Component</h3>
            </c-one> -->

            <c-one>
                <button class="btn btn-primary">Button One</button>
                <button class="btn btn-success">Button Two</button>
            </c-one>

            <!-- <icon-input [icon]="'Email'"></icon-input>
            <icon-input [icon]="'#'"></icon-input>
            <icon-input [icon]="'@'"></icon-input> -->

            <!--  <icon-input [icon]="'Email'">
                <input type="email" class="form-control">
            </icon-input>
            
            <icon-input [icon]="'#'">
                <input type="number" class="form-control">
            </icon-input> -->
        </div>
    `
})
export class RootComponent {
    flag = true;

    constructor() {
    }
}