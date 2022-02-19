import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `https://morning-meadow-02168.herokuapp.com`;

  constructor(private http: HttpClient ) { }


  public getUser(): Observable<User> {

    return this.http.get<User>(`${this.apiServerUrl}/users/getUserById/1220024417`)

  } 

  public postUser(user: User): Observable<User> {

    return this.http.post<User>(`${this.apiServerUrl}/users/postUtente`, user)

  } 

}