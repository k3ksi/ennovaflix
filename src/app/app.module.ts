import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ButtonComponent,
    VideoPageComponent,
    SearchComponent
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
