import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PoliciesComponent } from './policies/policies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'services', component: MyServicesComponent },
  { path: 'services/:id', component: ServicePageComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
