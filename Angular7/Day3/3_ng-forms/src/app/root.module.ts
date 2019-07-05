import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRef } from "@angular/core/src/render3";
import { RootComponent } from "./root.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelBasedFormComponent } from "./model-based/model-based.component";
import { TemplatedFormComponent } from "./templated/templated.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ModelBasedFormComponent, TemplatedFormComponent,
        ReactiveFormComponent],
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