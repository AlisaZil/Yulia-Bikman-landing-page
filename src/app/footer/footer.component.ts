import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private resizeListener!: () => void;
  public navType: string = 'computer';

  ngOnInit(): void {
    this.updateNavType();

    this.resizeListener = () => this.updateNavType();
    window.addEventListener('resize', this.resizeListener);

  }

  private updateNavType(): void {
    this.navType = window.innerWidth <= 768 ? 'phone' : 'computer';
  }

  public connectData: { data: string, iconName: string }[] = [
    { data: '120 East 56 Street , suite 530 , New York, NY 10022', iconName: 'location' },
    { data: '646-483-6237', iconName: 'phone' },
    { data: 'info@midtowneastmedical.com', iconName: 'email' },
    { data: 'Fax 646-599-4430 ', iconName: 'arrow' },
    { data: 'Clinical records fax 888.355.6397', iconName: 'arrow' },
  ];

  redirectToAppoint(): void {
    window.location.href = 'https://healow.com/apps/provider/julie-bikhman-3634220';
  }

}
