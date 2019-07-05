import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRef } from "@angular/core/src/render3";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";
import { COneComponent } from "./c-one/c-one.component";
import { IconInputComponent } from "./icon-input/icon-input.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, COneComponent, IconInputComponent],
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