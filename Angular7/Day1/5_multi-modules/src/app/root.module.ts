import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRef } from "@angular/core/src/render3";
import { RootComponent } from "./root.component";
import { MOneModule } from "./m-one/m-one.module";
import { MTwoModule } from "./m-two/m-two.module";

@NgModule({
    imports: [BrowserModule, MOneModule, MTwoModule],
    declarations: [RootComponent],
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