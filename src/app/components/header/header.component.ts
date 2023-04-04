import { Component, Input } from '@angular/core';
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
@Input() isUserLogged:User | null ={
  nickname: 'Paolo',
  email: 'paolocannone@pino.it',
  urlImage: 'avatar1.svg'
};
links = ['Film', 'Serie TV', 'Preferiti', 'Cerca']
}
