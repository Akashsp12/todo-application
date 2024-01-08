import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/posts'


  async getPosts() {
    return this.http.get(this.url).subscribe(async(data) => {
      return data
    })
  }

}
