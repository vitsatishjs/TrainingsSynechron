import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './models/post.model';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [DataService]
})

export class RootComponent implements OnInit, OnDestroy {
    posts: Array<Post>;
    url: string;
    message: string;
    gapSub: Subscription;

    constructor(private dService: DataService) {
        this.message = "Getting Data, please wait...";
    }

    ngOnInit() {
        this.gapSub = this.dService.getAllPosts().subscribe((resData) => {
            this.posts = resData;
            this.message = "";
        }, (err: string) => {
            this.message = err;
        });
        // this.dService.getAllPosts().subscribe((resData) => {
        //     this.posts = resData;
        //     this.message = "";
        // }, (err: HttpErrorResponse) => {
        //     this.message = err.message;
        // });
    }

    ngOnDestroy(): void {
        this.gapSub.unsubscribe();
    }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Post } from './models/post.model';

// @Component({
//     selector: 'root',
//     templateUrl: 'root.component.html',
// })

// export class RootComponent implements OnInit {
//     posts: Array<Post>;
//     url: string;
//     message: string;

//     constructor(private httpClient: HttpClient) {
//         this.url = "https://jsonplaceholder.typicode.com/posts";
//         this.message = "Getting Data, please wait...";
//     }

//     ngOnInit() {
//         this.httpClient.get<Array<Post>>(this.url).subscribe((resData) => {
//             this.posts= resData;
//             this.message = "";
//         }, (err: HttpErrorResponse) => {
//             this.message = err.message;
//         });
//     }
// }