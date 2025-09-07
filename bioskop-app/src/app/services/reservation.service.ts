import { Injectable } from '@angular/core';
import { Reservation, Projection } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  addReservation(userId: number, projectionId: number, projection: Projection): Reservation {
    const reservation: Reservation = {
      id: this.reservations.length + 1,
      userId: userId,
      projectionId: projectionId,
      projection: projection,
      reservationDate: new Date(),
      totalPrice: projection.movie.price
    };
    this.reservations.push(reservation);
    return reservation;
  }

  getUserReservations(userId: number): Reservation[] {
    return this.reservations.filter(r => r.userId === userId);
  }

  removeReservation(reservationId: number): boolean {
    const index = this.reservations.findIndex(r => r.id === reservationId);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      return true;
    }
    return false;
  }


  getTotalPrice(userId: number): number {
    return this.reservations
      .filter(r => r.userId === userId)
      .reduce((total, reservation) => total + reservation.totalPrice, 0);
  }
}
