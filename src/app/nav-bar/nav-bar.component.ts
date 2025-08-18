import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('slideMenu', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ]),
    ]),
  ]
})
export class NavBarComponent {

  public navType: 'phone' | 'computer' = 'computer';
  public isMenuOpen = false;
  private resizeListener!: () => void;
  public currBtnSize: 'small' | 'large' = 'large';

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeItems.forEach(item => { 
          item.isActive = item.path === event.url;
        })
      }
    });

    this.updateNavType();

    this.resizeListener = () => this.updateNavType();
    window.addEventListener('resize', this.resizeListener);

  }

  private updateNavType(): void {
    this.navType = window.innerWidth <= 768 ? 'phone' : 'computer';
    this.currBtnSize = window.innerWidth <= 1400 ? 'small' : 'large';    
    
  }
  
  public routeItems: { title: string, path: string, isActive: boolean, iconName:string }[] = [
    { title: 'Home', path: '/home', isActive: true, iconName: 'home' },
    { title: 'About', path: '/about', isActive: false, iconName: 'profile' },
    { title: 'Services', path: '/services', isActive: false, iconName: 'service' },
    { title: 'Contact Us', path: '/contact-us', isActive: false, iconName: 'envelope' },
    { title: 'Policies', path: '/policies', isActive: false, iconName: 'shield' },
    { title: 'Privacy', path: '/privacy', isActive: false, iconName: 'privacy' }
  ];
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(path: string): void {

    const currPath = path.split('/')[1];
    
    // if (currPath === 'contact') {
    //   const el = document.getElementById(currPath);
    //   el?.scrollIntoView({ behavior: 'smooth' });
    // } else {
      
    // }

    this.router.navigate([path]);
      this.routeItems.forEach(item => {
        item.isActive = item.path === path;
      });
    this.isMenuOpen = false;
  }

  redirectToAppoint(): void {
    
    window.location.href = 'https://healow.com/apps/provider/julie-bikhman-3634220';
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }
}
