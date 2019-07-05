import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRef } from "@angular/core/src/render3";
import { RootComponent } from "./root.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./d-form/d-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, DynamicFormComponent],
    bootstrap: [RootComponent],
    providers: [{
        provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
            return (component: ComponentRef<any>) => {
                console.log(component);
            }
        }
    }]
})
export class RootModule {
}