import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() isUserLogged = {
  nickname: 'User',
  email: 'testuser@ennovaflix.com',
  urlImage: 'avatar1.svg'
}
links = ['Film', 'Serie TV', 'Preferiti', 'Cerca']
}
