import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent {

  selectedPolicy: string = 'credit'; // default selection

  selectPolicy(policy: string) {
    this.selectedPolicy = policy;
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }
  
}
