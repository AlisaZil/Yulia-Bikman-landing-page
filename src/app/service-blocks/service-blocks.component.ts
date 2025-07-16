import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'service-blocks',
  templateUrl: './service-blocks.component.html',
  styleUrls: ['./service-blocks.component.scss']
})
export class ServiceBlocksComponent {
  
  public blockList: { title: string, imgName: string }[] = [
    { title: 'Internal Medicine', imgName: 'internal-medicine' },
    { title: 'Annual Physical Exam', imgName: 'annual-physical-exam' },
    { title: 'Doctor Consultation', imgName: 'doctor-consultation' },
    { title: 'Women’s Health', imgName: 'womens-health' },
    { title: 'Sleep Apnea', imgName: 'sleep-apnea' },
    { title: 'Immunization and Travel Medicine', imgName: 'immunization-and-travel-medicine' },
    { title: 'Travel Medicine', imgName: 'travel-medicine' },
    { title: 'Immigration Services', imgName: 'immigration-services' },
    { title: 'Health Supplements', imgName: 'health-supplements' }
  ];

  constructor(private router: Router) {}

  redirectToServicePage(title: string): void {
    const slug = this.slugify(title);
    this.router.navigate(['/services', slug]);
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/’/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');    
  }

}
