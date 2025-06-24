import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }
  
  redirectToWebsite(url: string) {
    console.log(url);
    
    window.location.href = url;
  }
}
