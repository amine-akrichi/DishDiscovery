import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _signupUrl = "http://localhost:8080/api/v1/signup";
  private _signinUrl = "http://localhost:8080/api/v1/signin";
  constructor(private _http:HttpClient) { }
  
  signup(user:any) {
    return this._http.post<any>(this._signupUrl, user);
  }

  signin(user:any) {
    return this._http.post<any>(this._signinUrl, user);
  }
}
