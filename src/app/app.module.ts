import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
<<<<<<< HEAD
import { SliderComponent } from './components/slider/slider.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FilmComponent } from './components/pages/film/film.component';
import { SerieTvComponent } from './components/pages/serie-tv/serie-tv.component';
=======
import { ButtonComponent } from './components/button/button.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> dafe66103477de89789d7b310553c63d716aa086

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
<<<<<<< HEAD
    SliderComponent,
    HomepageComponent,
    FilmComponent,
    SerieTvComponent
=======
    ButtonComponent,
    VideoPageComponent
>>>>>>> dafe66103477de89789d7b310553c63d716aa086
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
