import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Communication</h1>
            </div>

            <!-- <list [personList]=pList></list> -->

            <div [hidden]=!flag>
                <input type="number" [(ngModel)]=data/>
                <h3 class="alert alert-danger" *ngIf="message">{{message}}</h3>
                <counter [interval]=data #c1 (onMax)="maxedOut($event)"></counter>
            </div>

            <div [hidden]=flag>
                <counter [interval]=10 #c1></counter>
                <counter #c2></counter>
                <br/>
                <div class="row">
                    <div class="col-md-2">
                        <button class="btn btn-warning btn-block" (click)="c1.reset()">Parent Reset 1</button>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-warning btn-block" (click)="p_reset(c1)">Parent Reset 2</button>
                    </div>
                </div>
            </div>

            <div [hidden]=flag>
                <counter></counter>
                <counter [interval]=10></counter>
            </div>
        </div>
    `
})
export class RootComponent implements AfterViewInit {
    // @ViewChild(CounterComponent)
    // counter1: CounterComponent;

    // @ViewChild("c2")
    // counter1: CounterComponent;

    @ViewChildren(CounterComponent)
    counters: QueryList<CounterComponent>;

    pList: Array<string>;
    flag: boolean;
    data: number;
    message: string;

    constructor() {
        this.pList = ["Manish", "Abhijeet", "Abhishek", "Ramakant", "Subodh"];
        this.data = 10;
        this.flag = true;
    }

    ngAfterViewInit(): void {
        // this.counter1.interval = 100;
        // for (const counter of this.counters.toArray()) {
        //     counter.interval = 100;
        // }    
    }

    p_reset(counter: CounterComponent) {
        counter.reset();
    }

    maxedOut(flag: boolean) {
        if (flag) {
            this.message = "Max Click Reached, please reset to continue...";
        } else {
            this.message = "";
        }
    }
}