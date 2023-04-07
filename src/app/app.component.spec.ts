import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FilmComponent } from './components/pages/film/film.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { PreferitiComponent } from './components/pages/preferiti/preferiti.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SerieTvComponent } from './components/pages/serie-tv/serie-tv.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterLink, RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

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
        RouterTestingModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ennovaflix'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ennovaflix');
  });

  /*
  non ci serve il titolo perche usiamo il logo
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ennovaflix app!');
  });
  */
});
