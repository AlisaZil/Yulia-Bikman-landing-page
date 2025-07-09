import { Component } from '@angular/core';
import { Review } from '../review-block/review-block.component';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public currReview?: Review;
  public isReviewOpen: boolean = false;

  constructor(private router: Router) {}
  

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
      quote: `Dr. Bikhman is an amazing PCP. I have been working with her for over 5 years. She is very friendly, open, and dedicated. Her bedside manner is wonderful. She always provides a number of options and does not hesitate to refer to a specialist when there is a need. She has been there for me when I went through some health issues, making sure I can get an urgent appointment with her, as well as checking on me on the phone. Also, Dr. Bikhman's sense of humor makes everything seem lighter! `,
      name: 'Oksana Rosenblum',
      date: ''
    },
    {
      imgName: 'person-2',
      quote: `I’ve been with my GP, Dr. Bikhman, for over 10 years, and in that time she’s become so much more than just a doctor to me — they’ve been a steady, reassuring presence through so many chapters of my life. From everyday health concerns to more complex situations, Dr. Bikhman always made me feel genuinely cared for, never like just another patient on a list. What I appreciate most is how attentive and compassionate she is . She takes the time to really listen — not just to what I say, but to what I might not be saying. She asks thoughtful questions, explain everything in a way I can understand, and always make sure I feel supported and confident in the care I’m receiving. I’ve never once felt rushed or dismissed, and that level of respect and warmth is so appreciated. I trust her completely, and that trust has been earned again and again over the years. I truly can’t imagine having gone through the last decade without Dr. Bikhman in my corner. I’m so grateful for her care, professionalism, and heart. It’s rare to find someone who blends medical expertise with such deep kindness — and I feel incredibly lucky to have found that i her. Looking forward to continue our relationship.`,
      name: 'Ioana Garcia',
      date: ''
    },
    {
      imgName: 'person-3',
      quote: `A Truly Exceptional Physician – 17 Years of Outstanding Care

I have had the privilege of being under the care of Dr. Julie Bikhman for the past 17 years. Throughout this time, she has consistently demonstrated exceptional professionalism, clinical expertise, and genuine compassion. Her thoughtful and attentive approach to patient care is truly unparalleled.

Dr. Bikhman takes the time to listen carefully, explain thoroughly, and treat with both skill and empathy. Her dedication to her patients is evident in every interaction. I’ve followed her across all of her practices because I trust her completely—she’s more than just my primary physician; she’s someone I feel truly connected to. Whether it’s a routine checkup or a more complex issue, I always feel confident that I’m in the best hands.

Dr. Bikhman has been there for me through so much, and I’m endlessly grateful for her care and support. If you’re lucky enough to be her patient, you’ll understand what a rare and special doctor she is. I recommend her without reservation to anyone seeking a primary care physician who is both highly skilled and deeply compassionate.

`,
      name: 'Courtney Bernabei',
      date: ''
    },
    {
      imgName: 'person-4',
      quote: `I cannot say enough about Dr B. She is truly amazing. But what sets Dr. Bikhman apart is her compassionate approach and thorough attention to detail. She explains things in a clear, approachable way and always involve me in decision-making about my health. Whether it’s preventive care, managing a chronic condition, or just answering questions, Dr. B is incredibly knowledgeable, kind, and supportive. I’m so grateful for her professional care this past decade.`,
      name: 'Jen Donahue',
      date: ''
    }
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);

  }
  redirectToAppoint(): void {
    window.location.href = 'https://healow.com/apps/provider/julie-bikhman-3634220';
  }

  openReviewPopup(e: Review): void {
    this.currReview = e;
    this.isReviewOpen = true;
  }

}
