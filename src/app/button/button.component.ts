import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() button?: { type: 'secondary' | 'primary', text: string, link?: string };
  @Output() onClick: () => void = () => { 
    console.log('Button clicked', this.button?.link);
  }

}
