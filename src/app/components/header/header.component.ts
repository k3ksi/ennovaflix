import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
type User = {
  nickname:string,
  email:string,
  urlImage:string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  auth = inject(AuthService);
loggedUser(){
  return this.auth.user$.getValue();
}
logoutUser(){
  return this.auth.logout();
}
modal: boolean = false
links = ['Home','Film', 'Serie TV', 'Preferiti', 'Cerca']
}
