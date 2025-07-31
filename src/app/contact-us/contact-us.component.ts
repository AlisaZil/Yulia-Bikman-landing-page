import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  name: any = '';
  email: any = '';
  message: any = '';
  
  submitForm() {
    
    const subject = encodeURIComponent('Contact from ' + this.name);
    const body = encodeURIComponent(this.message + '\n\nFrom: ' + this.name + ' <' + this.email + '>');
    // window.location.href = `mailto:Alisazilberman@gmail.com`;
  }
}

