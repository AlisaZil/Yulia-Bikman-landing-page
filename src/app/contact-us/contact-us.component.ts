import { Component } from '@angular/core';
import * as AOS from 'aos';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  name: any = '';
  email: any = '';
  message: any = '';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }
  
  submitForm() {
     const subject = encodeURIComponent(`Contact from ${this.name}`);
  const body = encodeURIComponent(`${this.message}\n\nFrom: ${this.name} <${this.email}>`);
  
  const mailtoLink = `mailto:jbikhman@hotmail.com?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;
  } 
}