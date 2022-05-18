import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../model/user/user.model';


const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
  };
  

@Injectable()
export class UserService{
    
    constructor(private http: HttpClient) { }
    isAuth = false;


    getAll() : Observable<any> {
        return this.http.get<any>("http://localhost:8086/api/users");
    }

    onRegister(newuser: User){
        return this.http.post<User>("http://localhost:8086/api/users", newuser,httpOptions).subscribe();
    }
}