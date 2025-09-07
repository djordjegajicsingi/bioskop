export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  duration: number; // u minutima
  director: string;
  actors: string[];
  releaseDate: Date;
  price: number;
}

export interface Projection {
  id: number;
  movieId: number;
  movie: Movie;
  projectionDate: Date;
  projectionTime: string;
  status: 'rezervisano' | 'gledano' | 'otkazano';
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface Reservation {
  id: number;
  userId: number;
  projectionId: number;
  projection: Projection;
  reservationDate: Date;
  totalPrice: number;
}
