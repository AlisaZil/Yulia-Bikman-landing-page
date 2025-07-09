import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../review-block/review-block.component';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ReviewPopupComponent {

  @Input() review?: Review;
  @Input() isOpen: boolean = false;

  @Output() closed = new EventEmitter<boolean>();

  close() {
    this.isOpen = false;
    this.closed.emit(false); 
  }

}
