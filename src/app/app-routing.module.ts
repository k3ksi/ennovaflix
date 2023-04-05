import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FilmComponent } from './components/pages/film/film.component';
import { SerieTvComponent } from './components/pages/serie-tv/serie-tv.component';
import { SearchComponent } from './components/pages/search/search.component';
import { PrefiritiComponent } from './components/pages/prefiriti/prefiriti.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo:'' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'home', redirectTo: 'homepage' },
  { path: 'film', component: FilmComponent },
  { path: 'serietv', component: SerieTvComponent },
  { path: 'preferiti', component: PrefiritiComponent },
  { path: '', component: LoginComponent},
  { path: 'cerca', component: SearchComponent},
  { path: 'film', children:[{
    path: ':slug',
    component: VideoPageComponent
  }
  ] },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
