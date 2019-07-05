import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";
import { catchError, retry, delay } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class DataService {
    url: string;
    

    constructor(private httpClient: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    // getAllPosts() {
    //     return this.httpClient.get<Array<Post>>(this.url);
    // }

    getAllPosts() {
        return this.httpClient.get<Array<Post>>(this.url).pipe(
            delay(2000),
            retry(3),
            catchError(this.handleError<Array<Post>>('getAllPosts'))
        )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {
            // Error Logging
            console.error(`${operation} failed: ${error.message}`);

            return throwError('Connection Error, please try again later');
        }
    }
}