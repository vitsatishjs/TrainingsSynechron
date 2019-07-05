import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'async-observable',
    template: `
        <div class="card card-block">
            <h2 class="card-title">With Observable</h2>
            <h3>Result: {{observableData}}</h3>
            <h3>Observable Result: {{observable | async}}</h3>
            <button (click)="handleCancel()">Cancel</button>
        </div>
    `
})

export class AsyncObservableComponent implements OnInit {
    observableData: number;
    sub: Subscription;
    observable: Observable<number>;

    constructor() { }

    ngOnInit() {
        this.sub = this.getObservable().subscribe(v => this.observableData = v);
        this.observable = this.getObservable();
    }

    getObservable() {
        return interval(2000).pipe(map(v => Math.random()));
    }

    handleCancel(){
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}