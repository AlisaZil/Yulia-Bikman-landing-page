import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() button?: { type: 'secondary' | 'primary', text: string, link?: string, size?: 'small' | 'large' };
  @Output() onClick = new EventEmitter<string>();

  handleClick() {
    this.onClick.emit(this.button?.link || '');
  }

}
