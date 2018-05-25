import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from '../../environments/environment';
import { User } from '../signin-screen/user.model';
import { Http, Headers, Response } from '@angular/http'; 
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersUrl: string;
  currentUser?: User;
  constructor(private http:Http) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
    if (this.isLoggedIn()) {
      const { userId, email, firstName, lastName } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email,null, firstName,lastName);
    }
   }


   signin(user:User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(urljoin(this.usersUrl,'signin'), body, { headers })
    .pipe(map((response) => {
      const json = response.json();
      this.login(json)})
      ,catchError((error: Response) => Observable.throw(error.json())));

   }

   login = ({ token, userId, firstName, lastName, email}) => {
     this.currentUser = new User(email,null,firstName,lastName,userId);
     localStorage.setItem('token',token);
     localStorage.setItem('user', JSON.stringify({ userId, firstName, lastName, email}))
   }

   isLoggedIn(){
     return localStorage.getItem('token') !== null;
   }
}
