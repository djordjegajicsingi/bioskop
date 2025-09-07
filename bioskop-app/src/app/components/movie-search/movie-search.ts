import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css'
})
export class MovieSearch {
  @Output() searchCriteria = new EventEmitter<any>();

  searchForm = {
    title: '',
    genre: '',
    director: '',
    minDuration: '',
    maxDuration: '',
    minPrice: '',
    maxPrice: ''
  };

  genres = ['Sci-Fi', 'Action', 'Crime', 'Drama', 'Comedy', 'Horror', 'Romance', 'Thriller', 'Adventure', 'Fantasy'];

  onSearch() {
    const criteria = {
      title: this.searchForm.title,
      genre: this.searchForm.genre,
      director: this.searchForm.director,
      minDuration: this.searchForm.minDuration ? parseInt(this.searchForm.minDuration) : null,
      maxDuration: this.searchForm.maxDuration ? parseInt(this.searchForm.maxDuration) : null,
      minPrice: this.searchForm.minPrice ? parseInt(this.searchForm.minPrice) : null,
      maxPrice: this.searchForm.maxPrice ? parseInt(this.searchForm.maxPrice) : null
    };
    this.searchCriteria.emit(criteria);
  }

  onClear() {
    this.searchForm = {
      title: '',
      genre: '',
      director: '',
      minDuration: '',
      maxDuration: '',
      minPrice: '',
      maxPrice: ''
    };
    this.searchCriteria.emit({});
  }
}
