import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderPageComponent } from './components/pages/slider-page/slider-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SliderComponent,
    SliderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
