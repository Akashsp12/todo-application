import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // url = 'https://aarthiyak.onrender.com/arthiyak-v1/'

  url = 'http://localhost:5000/arthiyak-v1/'
  constructor(private http: HttpClient) { }


  createAccount(data: any) {
    return this.http.post(this.url + "create-account", data)
  }
  login(data: any) {
    return this.http.post(this.url + "login", data)
  }
  googleLoginMethod(data: any) {
    return this.http.post(this.url + "google-login-method", data)
  }
}
