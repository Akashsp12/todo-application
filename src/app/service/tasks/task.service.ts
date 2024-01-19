import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = environment.api
  token: any
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('aarthiyaktoken')

  }


  AddtaskFunction(data: any) {
    console.log(data)
    return this.http.post(this.url + "add-new-task", data, { headers: { "token": this.token } })
  }
}
