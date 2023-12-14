import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl = 'http://localhost:8080/api/v1/user';
  private _getUserUrl = `${this._baseUrl}`+'/{username}';
  private _updateUserUrl = `${this._baseUrl}`+'/{userId}';
  constructor(private _http:HttpClient) { }

  getUser(username: string){
    return this._http.get<any>(this._getUserUrl.replace('{username}', username));
  }
  
  updateUser(userId:Number , user:any){
    return this._http.put<any>(this._updateUserUrl.replace('{userId}', userId.toString()), user);
  }


}
