import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

   ngOnInit(): void {
      AOS.init({
        duration: 1000,
        once: true,
        disable: 'mobile'
      });
    }
  

  redirectToAppoint() {
    window.open('https://healow.com/apps/provider/julie-bikhman-3634220');
  }
}
