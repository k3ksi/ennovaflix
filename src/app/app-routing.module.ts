import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderPageComponent } from './components/pages/slider-page/slider-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo:'' },
  { path: 'slider', component:SliderPageComponent },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
