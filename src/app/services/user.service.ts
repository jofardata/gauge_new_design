import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(data){
    //retour de la requete
   return this.http.post<any>("https://operationsbackend.herokuapp.com/users/login", data,{observe:'response'});
  }  
}