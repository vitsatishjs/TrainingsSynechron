import { NgModule} from "@angular/core";
import { COneComponent } from "./c-one.component";

@NgModule({
    declarations: [COneComponent],
    exports: [COneComponent]
})
export class MOneModule {
}