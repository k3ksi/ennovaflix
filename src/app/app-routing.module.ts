import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { VideoPageComponent } from './components/pages/video-page/video-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', redirectTo: '' },
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
