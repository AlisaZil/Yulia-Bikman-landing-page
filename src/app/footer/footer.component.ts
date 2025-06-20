import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public connectData: { data: string, iconName: string }[] = [
    { data: '646-483-6237', iconName: 'phone' },
    { data: 'info@midtowneastmedical.com', iconName: 'email' },
    { data: 'Fax 646-599-4430', iconName: 'arrow' },
  ]

}
