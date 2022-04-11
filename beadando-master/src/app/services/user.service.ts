import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getUsers() {
    return this.http.get<User[]>('/api/users').toPromise();
  }

  async createUser(user: User) {
    return this.http.post<User>('/api/users', user).toPromise();
  }
  async loadUsers() {
    return this.http.get<User[]>('/api/users').toPromise();
  }
  async filterUsers(search: string) {
    return this.http.get<User[]>('/api/users', {
      params: { search }
    }).toPromise();
  }
  async getUserById(id: string) {
    return this.http.get<User>('/api/users/' + id).toPromise();
  }
}
