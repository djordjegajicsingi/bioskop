import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/movie.model';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  @Output() registerSuccess = new EventEmitter<void>();
  @Output() showLogin = new EventEmitter<void>();

  registerForm: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };

  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.registerForm.password !== this.confirmPassword) {
      this.errorMessage = 'Lozinke se ne poklapaju';
      return;
    }

    if (this.userService.register(this.registerForm)) {
      this.successMessage = 'Uspešno ste se registrovali!';
      setTimeout(() => {
        this.registerSuccess.emit();
      }, 2000);
    } else {
      this.errorMessage = 'Korisničko ime već postoji';
    }
  }

  onShowLogin() {
    this.showLogin.emit();
  }
}
