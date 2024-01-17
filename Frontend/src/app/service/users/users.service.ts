import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  createAccount(data: any) {
    return this.http.post(environment.api + "create-account", data)
  }
  login(data: any) {
    return this.http.post(environment.api + "login", data)
  }
}
