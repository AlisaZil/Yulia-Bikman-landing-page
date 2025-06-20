import { Component } from '@angular/core';

@Component({
  selector: 'service-blocks',
  templateUrl: './service-blocks.component.html',
  styleUrls: ['./service-blocks.component.scss']
})
export class ServiceBlocksComponent {

  public blockList: { title: string, imgName: string }[] = [
    { title: 'Internal Medicine', imgName: 'Internal-Medicine' },
    { title: 'Annual Physical Exam', imgName: 'Annual-Physical-Exam' },
    { title: 'Doctor Consultation', imgName: 'Doctor-Consultation' },
    { title: 'Women’s Health', imgName: 'Women’s-Health' },
    { title: 'Sleep Apnea', imgName: 'Sleep-Apnea' },
    { title: 'Vaccine Administration', imgName: 'Vaccine' },
    { title: 'Travel Medicine', imgName: 'suitcase' },
    { title: 'Immigration Services', imgName: 'world' },
    { title: 'Health Supplements', imgName: 'Health-Supplements' }
  ]
}
