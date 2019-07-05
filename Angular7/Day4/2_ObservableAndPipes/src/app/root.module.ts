import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { AsyncPromiseComponent } from "./async-promise.component";
import { AsyncObservableComponent } from "./async-observable.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, AsyncPromiseComponent, AsyncObservableComponent],
    bootstrap: [RootComponent]
})
export class RootModule { }