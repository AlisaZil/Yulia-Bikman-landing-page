import { Component, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }

}
