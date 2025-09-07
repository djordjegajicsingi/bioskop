import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { UserService } from './services/user.service';
import { ReservationService } from './services/reservation.service';
import { Movie, Projection, User, Reservation } from './models/movie.model';
import { MovieSearch } from './components/movie-search/movie-search';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetails } from './components/movie-details/movie-details';
import { Cart } from './components/cart/cart';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MovieSearch, MovieList, MovieDetails, Cart, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Bioskop';
  
  currentView: 'movies' | 'movie-details' | 'cart' | 'login' | 'register' = 'movies';
  selectedMovie: Movie | null = null;
  filteredMovies: Movie[] = [];
  currentUser: User | null = null;
  userReservations: Reservation[] = [];
  totalPrice: number = 0;

  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private reservationService: ReservationService
  ) {
    this.filteredMovies = this.movieService.getAllMovies();
    this.currentUser = this.userService.getCurrentUser();
    this.updateReservations();
  }

  onSearch(criteria: any) {
    this.filteredMovies = this.movieService.searchMovies(criteria);
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
    this.currentView = 'movie-details';
  }

  onBackToList() {
    this.currentView = 'movies';
    this.selectedMovie = null;
  }

  onReservationMade(projection: Projection) {
    if (this.currentUser) {
      this.reservationService.addReservation(this.currentUser.id, projection.id, projection);
      this.updateReservations();
      alert('Rezervacija je uspešno dodana u korpu!');
    } else {
      alert('Morate se prijaviti da biste rezervisali kartu!');
      this.currentView = 'login';
    }
  }

  onRemoveReservation(reservationId: number) {
    this.reservationService.removeReservation(reservationId);
    this.updateReservations();
  }

  onLoginSuccess() {
    this.currentUser = this.userService.getCurrentUser();
    this.updateReservations();
    this.currentView = 'movies';
  }

  onRegisterSuccess() {
    this.currentView = 'login';
  }

  onShowRegister() {
    this.currentView = 'register';
  }

  onShowLogin() {
    this.currentView = 'login';
  }

  onLogout() {
    this.userService.logout();
    this.currentUser = null;
    this.userReservations = [];
    this.totalPrice = 0;
    this.currentView = 'movies';
  }

  onShowCart() {
    this.currentView = 'cart';
  }

  onShowMovies() {
    this.currentView = 'movies';
  }

  private updateReservations() {
    if (this.currentUser) {
      this.userReservations = this.reservationService.getUserReservations(this.currentUser.id);
      this.totalPrice = this.reservationService.getTotalPrice(this.currentUser.id);
    }
  }
}
