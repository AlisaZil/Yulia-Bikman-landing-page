import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceBlocksComponent } from './service-blocks/service-blocks.component';
import { ReviewBlockComponent } from './review-block/review-block.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PoliciesComponent } from './policies/policies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    HomePageComponent,
    ServiceBlocksComponent,
    ReviewBlockComponent,
    FooterComponent,
    AboutMeComponent,
    MyServicesComponent,
    PoliciesComponent,
    PrivacyComponent,
    ReviewPopupComponent,
    ServicePageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
