import { Component, ChangeDetectionStrategy, NgZone } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Data Binding</h1>
            </div>

            <div [hidden]=!flag>
                <assign-one></assign-one>
            </div>
            <div [hidden]=flag>
                <assign-two></assign-two>
            </div>
            <div [hidden]=!flag>
                <h2 class="text-success">Two Way Binding</h2>
                <h3>Message: {{message}}</h3>
                <input type="text" bindon-ngModel=message>
                <input type="text" [(ngModel)]=message>
                <input type="text" [(ngModel)]=message [ngModelOptions]="{updateOn: 'blur'}">
                <br/>
                <hr/>
                <input type="text" [(ngModel)]=city>
                <h3>Yor are from: {{city}}</h3>
                <hr/>
                <input type="text" [(ngModel)]=city (change)=doUpdate(city) (blur)=doBlur()>
                <input type="text" [(ngModel)]=city (input)=doUpdate(city)>
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Event Binding</h2>
                <h3>Message: {{message}}</h3>
                <button class="btn btn-info" on-click="doChange()">Click Me</button>
                <button class="btn btn-info" (click)="doChange()">Click Me</button>
                <button class="btn btn-warning" id="b1">Click Me - JS</button>
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Attribute Binding</h2>
                <img [src]=image1 height="300" width="300"/>
                <img [src]=image1 [height]=h [width]=w/>

                <!-- <table style="border:1px solid black" height="300" width="300"> -->
                <table style="border:1px solid black" [attr.height]=h [attr.width]=w>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
              </table> 
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Property Binding</h2>
                <h3>Message: {{message}}</h3>
                Hiding: <h3 innerHTML={{message}} hidden={{flag}}>Message:</h3>
                <h3 bind-innerHTML=message bind-hidden=flag>Message:</h3>
                <h3 [innerHTML]=message [hidden]=flag>Message:</h3>
                <p [innerText]=message></p>
                <input type="text" value={{message}}>
                <input type="text" [value]=message>
            </div>
        </div>
    `
})
export class RootComponent {
    message: string;
    flag: boolean;
    image1: any;
    h: number;
    w: number;

    constructor(private zone: NgZone) {
        this.message = "Hello";
        this.flag = false;
        this.image1 = require('../assets/image1.jpg');
        this.h = 300;
        this.w = 300;
    }

    ngAfterViewInit() {
        // document.getElementById("b1").addEventListener("click", () => {
        //     this.message = (new Date()).toString();
        // });

        // setInterval(() => {
        //     this.message = (new Date()).toTimeString();
        // }, 1000);

        this.zone.runOutsideAngular(() => {
            document.getElementById("b1").addEventListener("click", () => {
                this.message = (new Date()).toString();
                console.log(this.message);
            });
        })
    }

    doChange() {
        // this.message = (new Date()).toString();
        console.log(this.message);
    }

    doUpdate(c: string) {
        this.message = "From: " + c;
        console.log("Change Fired...");
    }

    doBlur() {
        console.log("Blur Fired...");
    }
}