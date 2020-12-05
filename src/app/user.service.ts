import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 




@Injectable({
    providedIn : 'root'
})

export class userSrevice {

    constructor(private http: HttpClient) { }

    protected url = 'http://localhost:4200'

    getUsers(): Observable<any> {
        return this
            .http
            .get('${this.url}/results')
            .pipe()
    }
    
}



