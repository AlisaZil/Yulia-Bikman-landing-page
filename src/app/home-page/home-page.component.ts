import { Component } from '@angular/core';
import { Review } from '../review-block/review-block.component';
import * as AOS from 'aos';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }

  public reviews: Review[] = [
    {
      imgName: 'person-1',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Ethan Carter',
      date: 'Lorem, Ipsum'
    },
    {
      imgName: 'person-2',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Lena Brooks',
      date: 'Lorem, Ipsum'
    },
    {
      imgName: 'person-3',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'David Thompson',
      date: 'Lorem, Ipsum'
    },
  ];
}
