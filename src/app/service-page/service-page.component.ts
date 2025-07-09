import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent {

  public serviceId!: string;
  public serviceData: {id:string, title: string, content:string}[] = [
    {
      id: 'internal-medicine',
      title: 'Internal Medicine / Primary Care',
      content: `As an internal medicine and primary care physician, Dr. Julie Bikhman specializes in the comprehensive, long-term care of adults. Her practice focuses on the prevention, diagnosis, and treatment of a wide range of acute and chronic conditions—while also emphasizing overall wellness and lifestyle management.`
    },
    {
      id: 'annual-physical-exam',
      title: 'Annual Physical Exam',
      content: 'Annual physicals, routine screenings, vaccinations, and risk assessments tailored to your age, health history, and lifestyle.'
    },
    {
      id: 'doctor-consultation',
      title: 'Doctor Consultation',
      content: 'Chronic Disease Management: Ongoing care for conditions such as hypertension, diabetes, high cholesterol, asthma, thyroid disorders, and arthritis.'
    },
    {
      id: 'vaccine-administration',
      title: 'Vaccine Administration',
      content: 'Timely evaluation and treatment of common illnesses such as infections, colds, flu, allergies, digestive issues.'
    },
    {
      id: 'health-supplements',
      title: 'Health Supplements',
      content: 'Referrals to specialists and collaboration with other healthcare providers to ensure seamless, well-rounded care.'
    },
    {
      id: 'womens-health',
      title: 'Women’s Health',
      content: 'Peri-menopause and menopause management, and preventive care aligned with women’s specific health needs.'
    },
    {
      id: 'sleep-apnea',
      title: 'Sleep Apnea',
      content: 'Symptoms such as loud snoring, witnessed apneas, morning headaches, and daytime fatigue are suggestive of sleep apnea. We do sleep apnea test with home sleep apnea test kit and refer to sleep specialist for appropriate treatment such as oral appliance or CPAP machine or surgery.'
    },
    {
      id: 'travel-medicine',
      title: 'Travel Medicine',
      content: 'Dr. Bikhman provides appropriate age vaccination according to CDC guidelines as well as travel vaccination.'
    },
    {
      id: 'immigration-services',
      title: 'Immigration Services',
      content: 'Dr. Bikhman is a registered civil surgeon and provides comprehensive immigration physical exam.'
    }
  ];

  currentService?: {id:string, title:string, content:string};
  

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') || '';
      this.loadServiceData();
    });
  }

  ngOnInit(): void {
      AOS.init({
        duration: 1000,
        once: true,
        disable: 'mobile'
      });
  }

  loadServiceData(): void {
    this.currentService = this.serviceData.find(service => service.id === this.serviceId);
    
  }

}
