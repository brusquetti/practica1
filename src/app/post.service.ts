import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(public http: HttpClient) { }
  getAll(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}

