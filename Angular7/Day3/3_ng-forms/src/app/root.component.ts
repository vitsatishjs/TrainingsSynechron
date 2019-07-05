import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Angular Forms</h1>
            </div>

            <!-- <model-based></model-based> -->
            <!-- <templated-form></templated-form> -->
            <reactive-form></reactive-form>
        </div>
    `
})
export class RootComponent {
    flag: boolean;

    constructor() {
    }
}