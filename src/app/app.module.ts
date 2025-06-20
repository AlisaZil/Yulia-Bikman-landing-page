import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceBlocksComponent } from './service-blocks/service-blocks.component';
import { ReviewBlockComponent } from './review-block/review-block.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    HomePageComponent,
    ServiceBlocksComponent,
    ReviewBlockComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
