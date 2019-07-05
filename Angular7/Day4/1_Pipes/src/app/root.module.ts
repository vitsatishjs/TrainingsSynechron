import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./list/list.component";
import { CapitalizePipe } from "./pipes/capitaize.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ListComponent, CapitalizePipe, FilterPipe],
    bootstrap: [RootComponent]
})
export class RootModule { }