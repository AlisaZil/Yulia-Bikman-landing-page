import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public routeItems: { title: string, path: string }[] = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Policies', path: '/policies' },
    { title: 'Privacy', path: '/privacy' }
  ];
  

}
