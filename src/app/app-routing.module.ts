import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FilmComponent } from './components/pages/film/film.component';
import { SerieTvComponent } from './components/pages/serie-tv/serie-tv.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo:'' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'film', component: FilmComponent },
  { path: 'serie', component: SerieTvComponent },
=======
  { path: '', component: LoginComponent},
  { path: 'home', redirectTo: '' },
  { path: 'film', children:[{
    path: ':slug',
    component: VideoPageComponent
  }
  ] },
>>>>>>> dafe66103477de89789d7b310553c63d716aa086
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
