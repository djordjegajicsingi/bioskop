import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() showRegister = new EventEmitter<void>();

  loginForm = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    if (this.userService.login(this.loginForm.username, this.loginForm.password)) {
      this.loginSuccess.emit();
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Neispravno korisničko ime ili lozinka';
    }
  }

  onShowRegister() {
    this.showRegister.emit();
  }
}
