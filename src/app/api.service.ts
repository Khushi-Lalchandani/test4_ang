import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './table/api.interface';
@Injectable({ providedIn: 'root' })
export class APIService {
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get<User>(' https://dummyjson.com/users');
  }
}
