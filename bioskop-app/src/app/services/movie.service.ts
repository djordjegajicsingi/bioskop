import { Injectable } from '@angular/core';
import { Movie, Projection } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'Film o snovima unutar snova',
      genre: 'Sci-Fi',
      duration: 148,
      director: 'Christopher Nolan',
      actors: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy'],
      releaseDate: new Date('2010-07-16'),
      price: 500
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'Batman protiv Jokera',
      genre: 'Action',
      duration: 152,
      director: 'Christopher Nolan',
      actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      releaseDate: new Date('2008-07-18'),
      price: 450
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      description: 'Kriminalistička drama',
      genre: 'Crime',
      duration: 154,
      director: 'Quentin Tarantino',
      actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
      releaseDate: new Date('1994-10-14'),
      price: 400,
    },
    {
      id: 4,
      title: 'Forrest Gump',
      description: 'Život Forresta Gumpa',
      genre: 'Romance',
      duration: 142,
      director: 'Robert Zemeckis',
      actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      releaseDate: new Date('1994-07-06'),
      price: 350,
    },
    {
      id: 5,
      title: 'The Matrix',
      description: 'Neo u Matrixu',
      genre: 'Sci-Fi',
      duration: 136,
      director: 'Lana Wachowski',
      actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      releaseDate: new Date('1999-03-31'),
      price: 480,
    },
    {
      id: 6,
      title: 'Goodfellas',
      description: 'Mafijaški film',
      genre: 'Crime',
      duration: 146,
      director: 'Martin Scorsese',
      actors: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
      releaseDate: new Date('1990-09-19'),
      price: 420,
    },
    {
      id: 7,
      title: 'The Shawshank Redemption',
      description: 'Zatvorska drama',
      genre: 'Drama',
      duration: 142,
      director: 'Frank Darabont',
      actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      releaseDate: new Date('1994-09-23'),
      price: 380,
    },
    {
      id: 8,
      title: 'Fight Club',
      description: 'Borilački klub',
      genre: 'Thriller',
      duration: 139,
      director: 'David Fincher',
      actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
      releaseDate: new Date('1999-10-15'),
      price: 460,
    },
    {
      id: 9,
      title: 'The Godfather',
      description: 'Mafijaška saga',
      genre: 'Crime',
      duration: 175,
      director: 'Francis Ford Coppola',
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      releaseDate: new Date('1972-03-24'),
      price: 500,
    },
    {
      id: 10,
      title: 'Interstellar',
      description: 'Svemirska avantura',
      genre: 'Sci-Fi',
      duration: 169,
      director: 'Christopher Nolan',
      actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      releaseDate: new Date('2014-11-07'),
      price: 520,
    },
    {
      id: 11,
      title: 'The Lion King',
      description: 'Animirani film o lavu',
      genre: 'Adventure',
      duration: 88,
      director: 'Roger Allers',
      actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
      releaseDate: new Date('1994-06-15'),
      price: 300,
    }
  ];

  private projections: Projection[] = [
    { id: 1, movieId: 1, movie: this.movies[0], projectionDate: new Date('2025-09-01'), projectionTime: '20:00', status: 'rezervisano' },
    { id: 2, movieId: 1, movie: this.movies[0], projectionDate: new Date('2025-09-02'), projectionTime: '18:00', status: 'rezervisano' },
    { id: 3, movieId: 2, movie: this.movies[1], projectionDate: new Date('2025-09-03'), projectionTime: '20:30', status: 'rezervisano' },
    { id: 4, movieId: 3, movie: this.movies[2], projectionDate: new Date('2025-09-04'), projectionTime: '19:00', status: 'rezervisano' },
    { id: 5, movieId: 4, movie: this.movies[3], projectionDate: new Date('2025-09-05'), projectionTime: '17:30', status: 'rezervisano' },
    { id: 6, movieId: 5, movie: this.movies[4], projectionDate: new Date('2025-09-06'), projectionTime: '21:00', status: 'rezervisano' },
    { id: 7, movieId: 6, movie: this.movies[5], projectionDate: new Date('2025-09-07'), projectionTime: '20:00', status: 'rezervisano' },
    { id: 8, movieId: 7, movie: this.movies[6], projectionDate: new Date('2025-09-08'), projectionTime: '18:30', status: 'rezervisano' },
    { id: 9, movieId: 8, movie: this.movies[7], projectionDate: new Date('2025-09-09'), projectionTime: '19:30', status: 'rezervisano' },
    { id: 10, movieId: 9, movie: this.movies[8], projectionDate: new Date('2025-09-10'), projectionTime: '20:00', status: 'rezervisano' },
    { id: 11, movieId: 10, movie: this.movies[9], projectionDate: new Date('2025-09-11'), projectionTime: '21:30', status: 'rezervisano' },
    { id: 12, movieId: 11, movie: this.movies[10], projectionDate: new Date('2025-09-12'), projectionTime: '16:00', status: 'rezervisano' }
  ];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getAllProjections(): Projection[] {
    return this.projections;
  }

  searchMovies(criteria: any): Movie[] {
    return this.movies.filter(movie => {
      if (criteria.title && !movie.title.toLowerCase().includes(criteria.title.toLowerCase())) {
        return false;
      }
      if (criteria.genre && movie.genre !== criteria.genre) {
        return false;
      }
      if (criteria.director && !movie.director.toLowerCase().includes(criteria.director.toLowerCase())) {
        return false;
      }
      if (criteria.minDuration && movie.duration < criteria.minDuration) {
        return false;
      }
      if (criteria.maxDuration && movie.duration > criteria.maxDuration) {
        return false;
      }
      if (criteria.minPrice && movie.price < criteria.minPrice) {
        return false;
      }
      if (criteria.maxPrice && movie.price > criteria.maxPrice) {
        return false;
      }
      return true;
    });
  }

  getProjectionsByMovie(movieId: number): Projection[] {
    return this.projections.filter(p => p.movieId === movieId);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  getProjectionById(id: number): Projection | undefined {
    return this.projections.find(projection => projection.id === id);
  }


}
