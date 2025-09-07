import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../models/movie.model';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  @Input() reservations: Reservation[] = [];
  @Input() totalPrice: number = 0;
  @Output() removeReservation = new EventEmitter<number>();

  onRemove(reservationId: number) {
    this.removeReservation.emit(reservationId);
  }

  canDelete(reservation: Reservation): boolean {
    return reservation.projection.status === 'rezervisano';
  }
}
