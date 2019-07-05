import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRef } from "@angular/core/src/render3";
import { RootComponent } from "./root.component";
import { FormsModule } from "@angular/forms";
import { AssignmentOneComponent } from "./assign-one/assign-one.component";
import { AssignmentTwoComponent } from "./assign-two/assign-two.component";
import { ListComponent } from "./list/list.component";
import { ChangeContentDirective } from "./directives/cc.directive";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, ChangeContentDirective,
        AssignmentOneComponent, AssignmentTwoComponent, HighlightDirective],
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