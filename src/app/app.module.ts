import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FilmComponent } from './components/pages/film/film.component';
import { SerieTvComponent } from './components/pages/serie-tv/serie-tv.component';
import { ButtonComponent } from './components/button/button.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/pages/search/search.component';
import { PreferitiComponent } from './components/pages/preferiti/preferiti.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { SelectComponent } from './components/select/select.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SliderComponent,
    HomepageComponent,
    FilmComponent,
    SerieTvComponent,
    ButtonComponent,
    VideoPageComponent,
    SearchComponent,
    PreferitiComponent,
    ResultSearchComponent,
    SelectComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
