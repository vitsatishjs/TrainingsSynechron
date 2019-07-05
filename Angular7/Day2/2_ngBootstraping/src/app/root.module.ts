// 1. Default Bootstrap
// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";

// import { HelloComponent } from "./hello.component";

// @NgModule({
//     imports: [BrowserModule],
//     declarations: [HelloComponent],
//     bootstrap: [HelloComponent]       
// })
// export class RootModule {}

// 2. Manual Bootstrap
// import { NgModule, ApplicationRef, DoBootstrap } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";

// import { HelloComponent } from "./hello.component";

// @NgModule({
//     imports: [BrowserModule],
//     declarations: [HelloComponent],
//     entryComponents: [HelloComponent]
// })
// export class RootModule implements DoBootstrap {
//     ngDoBootstrap(appRef: ApplicationRef) {
//         const container = document.querySelector("#container");
//         // container.textContent = "This is dynamically added text";

//         const helloTag = document.createElement('hello');
//         container.appendChild(helloTag);

//         appRef.bootstrap(HelloComponent);
//     }
// }

// 3. Angular Elements
import { NgModule, ApplicationRef, DoBootstrap, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";

import { HelloComponent } from "./hello.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    entryComponents: [HelloComponent]
})
export class RootModule implements DoBootstrap {
    constructor(private injector: Injector) { }

    ngDoBootstrap(appRef: ApplicationRef) {
        const HelloElement = createCustomElement(HelloComponent, {injector: this.injector});
        customElements.define('my-hello', HelloElement);
    }
}