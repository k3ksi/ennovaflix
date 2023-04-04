import { Component, inject } from '@angular/core';
import { AuthService, User } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  auth = inject(AuthService);
  model = new FormGroup({
    username: new FormControl<string>('', [
      Validators.minLength(2),
      Validators.maxLength(8),
      Validators.required,
    ]),
    password: new FormControl<string>('', [
      Validators.minLength(2),
      Validators.maxLength(8),
      Validators.required,
    ]),
  });
  showValues() {
    console.clear();
    console.log(this.model.value.username, this.model.value.password);
  }
  register() {
      const user: User = {
        username: 'test@ennovaflix.com',
        password: '1234',
        urlImage: 'avatar1.svg'
      }
      this.auth.registerUser(user);
    }

  login() {
    this.register();
    if (this.model.value.username && this.model.value.password) {
      const user: User = {
        username: this.model.value.username,
        password: this.model.value.password,
        urlImage: 'avatar1.svg'
      };
      console.log(this.auth.loginUser(user), this.auth.user$.getValue());
    }
  }
  search() {
    if (this.model.value.username) {
      console.log(this.auth.searchUser(this.model.value.username));
    }
  }
  loggedUser(){
    return this.auth.user$.getValue();
  }
  constructor(){
    this.register()
  }
}
