import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Review { quote: string, name: string, date: string, imgName: string }

@Component({
  selector: 'review-block',
  templateUrl: './review-block.component.html',
  styleUrls: ['./review-block.component.scss']
})
export class ReviewBlockComponent {

  @Input() review?: Review;

  @Output() onClick = new EventEmitter<Review>();

  public isPopupOpen = false;
  
  handleClick() {
    this.onClick.emit(this.review);
  }
  

}
