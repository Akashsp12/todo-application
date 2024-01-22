import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  url = environment.api
  token: any
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('aarthiyaktoken')
  }


  createAccount(data: any) {
    return this.http.post(this.url + "create-account", data)
  }
  login(data: any) {
    return this.http.post(this.url + "login", data)
  }
  googleLoginMethod(data: any) {
    return this.http.post(this.url + "google-login-method", data)
  }
  getUserDetails() {
    return this.http.get(this.url + "get-user-profile", { headers: { "token": this.token } })
  }




}
