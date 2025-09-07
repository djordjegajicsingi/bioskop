import { Injectable } from '@angular/core';
import { User } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Marko',
      lastName: 'Marković',
      username: 'marko',
      password: '123456'
    },
    {
      id: 2,
      firstName: 'Ana',
      lastName: 'Anić',
      username: 'ana',
      password: '123456'
    }
  ];

  private currentUser: User | null = null;

  register(user: User): boolean {
    const existingUser = this.users.find(u => u.username === user.username);
    if (existingUser) {
      return false;
    }
    user.id = this.users.length + 1;
    this.users.push(user);
    return true;
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
