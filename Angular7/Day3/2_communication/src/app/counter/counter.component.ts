import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
    private count: number;
    private flag: boolean;
    private clickCount: number;

    @Input() interval: number;
    @Output() onMax: EventEmitter<boolean>;

    constructor() {
        this.interval = 1;
        this.onMax = new EventEmitter<boolean>();
    }

    ngOnInit() {
        this.reset();
    }

    private manageClickCount() {
        this.clickCount += 1;
        if (this.clickCount > 9) {
            this.flag = true;
            this.onMax.emit(this.flag);
        }
    }

    private inc() {
        this.manageClickCount();
        this.count += this.interval;
    }

    private dec() {
        this.manageClickCount();
        this.count -= this.interval;
    }

    reset() {
        this.count = 0;
        this.clickCount = 0;
        this.flag = false;
        this.onMax.emit(this.flag);
    }
}