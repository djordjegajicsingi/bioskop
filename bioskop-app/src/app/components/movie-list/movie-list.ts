import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  @Input() movies: Movie[] = [];
  @Output() movieSelected = new EventEmitter<Movie>();

  onMovieClick(movie: Movie) {
    this.movieSelected.emit(movie);
  }
}
