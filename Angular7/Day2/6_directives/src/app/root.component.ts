import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Directives</h1>
            </div>

            <div [hidden]=!flag>
                <h2>Custom Directive</h2>
                <h3 change-content></h3>
                <list></list>
            </div>

            <div [hidden]=flag>
                <h2>Structural Directive</h2>
                <div [hidden]=flag>
                    <h2 [style.display]="name ? 'block' : 'none'">Hello, {{name}}</h2>
                
                    <ng-template [ngIf]="name">
                        <h2>Template - Hello, {{name}}</h2>
                    </ng-template>

                    <h2 *ngIf="name; else elseBlock">Template - Hello, {{name}}</h2>

                    <ng-template #elseBlock>
                        <h2>Template - No Name</h2>
                    </ng-template>
                </div>

                <list></list>
            </div> 

            <div [hidden]=flag>
                <h2>Attribute Directive</h2>
                <h4 [ngStyle]="myStyles">Style Binding</h4>
                <assign-two></assign-two>
            </div> 
        </div>
    `
})
export class RootComponent {
    myStyles = {
        'background-color': 'green',
        'font-size': '20px',
        'color': 'white'
    };

    flag = true;

    name: string;

    constructor() {
        // this.name = "Synechron";
    }
}