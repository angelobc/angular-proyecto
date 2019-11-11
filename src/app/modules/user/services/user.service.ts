import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import User from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL: string = environment.baseUrl;
  private endpoint: string = 'users';
  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseURL}${this.endpoint}`);
  }

  getUser(id: number) {
    return this.http.get(`${this.baseURL}${this.endpoint}/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseURL}${this.endpoint}/${id}`);
  }

  updateUser(user: User) {
    const url = `${this.baseURL}${this.endpoint}/${user.id}`;
    return this.http.put(url, user);
  }

  createUser(user: User) {
    const url = `${this.baseURL}${this.endpoint}`;
    return this.http.post(url, user);
  }
}
