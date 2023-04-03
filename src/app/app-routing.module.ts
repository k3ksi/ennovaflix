import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './components/pages/notfound-page/notfound-page.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
