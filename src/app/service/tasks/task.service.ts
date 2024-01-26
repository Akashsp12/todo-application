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


  AddTaskFunction(data: any) {
    console.log(data)
    return this.http.post(this.url + "add-new-task", data, { headers: { "token": this.token } })
  }
  editTask(id: any) {
    console.log(id);
    return this.http.get(this.url + `edit-task/${id}`, { headers: { "token": this.token } })
  }


  getTaskFromDb(data: any) {
    return this.http.post(this.url + "get-task-from-db", data, { headers: { "token": this.token } })
  }
  updateTask(data: any) {
    console.log(data);
    return this.http.put(this.url + "update-task-with-id", data, { headers: { "token": this.token } })
  }

}
