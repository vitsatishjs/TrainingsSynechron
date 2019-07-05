import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'async-promise',
    template: `
        <div class="card card-block">
            <h2 class="card-title">With Promise</h2>
            <h3>Result: {{promiseData}}</h3>
            <h3>Promise Result: {{promise | async}}</h3>
        </div>
    `
})

export class AsyncPromiseComponent implements OnInit {
    promiseData: number;
    promise: Promise<number>;

    constructor() { }

    ngOnInit() {
        this.getPromise().then(n => this.promiseData = n);
        this.promise = this.getPromise();
        console.log(this.promise);
    }

    getPromise(): Promise<number> {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(Math.random());
            }, 2000);
        })
    }
}