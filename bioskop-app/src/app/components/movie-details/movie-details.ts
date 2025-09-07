import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, Projection } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {
  @Input() movie: Movie | null = null;
  @Output() backToList = new EventEmitter<void>();
  @Output() reservationMade = new EventEmitter<Projection>();

  projections: Projection[] = [];

  constructor(private movieService: MovieService) {}

  ngOnChanges() {
    if (this.movie) {
      this.projections = this.movieService.getProjectionsByMovie(this.movie.id);
    }
  }

  onBack() {
    this.backToList.emit();
  }

  onReserve(projection: Projection) {
    this.reservationMade.emit(projection);
  }
}
