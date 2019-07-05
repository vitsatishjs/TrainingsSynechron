import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
})

export class RootComponent implements OnInit, OnDestroy {
    
    observable: Observable<number>;
    subject: Subject<any>;
    s2: Subscription;

    constructor() { }

    ngOnInit() {
        this.observable = Observable.create((ob: Observer<number>) => {
            setInterval(() => {
                ob.next(Math.random());
                // ob.complete();
            }, 2000);
        });

        this.observable.pipe(delay(2000)).subscribe((data) => {
            console.log("S1 - ", data);
        });

        this.s2 = this.observable.subscribe((data) => {
            console.log("S2 - ", data);
        });

        // this.subject = new Subject<number>();

        // setInterval(() => {
        //     this.subject.next(Math.random());
        // }, 2000);

        // this.subject.subscribe((data) => {
        //     console.log("S1 - ", data);
        // });

        // this.subject.subscribe((data) => {
        //     console.log("S2 - ", data);
        // });


        // this.observable.subscribe((data) => {
        //     console.log("Observable Output - ", data);
        // });

        // this.getPromise().then((data) => {
        //     console.log("Promise Output - ", data);
        // });
    }

    getPromise(): Promise<number> {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(Math.random());
            }, 2000);
        })
    }

    ngOnDestroy(): void {
        this.s2.unsubscribe();
    }
}