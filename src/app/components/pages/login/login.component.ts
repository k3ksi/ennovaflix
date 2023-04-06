import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    this.auth.registerUser(this.auth.fakeUser);
  }

  login() {
    this.register();
    if (
      this.model.value.username &&
      this.model.value.password &&
      this.model.value.username === this.auth.fakeUser.email &&
      this.model.value.password === this.auth.fakeUser.password
    ) {
      this.auth.loginUser(this.auth.fakeUser);
    }
  }
  search() {
    if (this.model.value.username) {
      console.log(this.auth.searchUser(this.model.value.username));
    }
  }
  loggedUser() {
    return this.auth.user$.getValue();
  }
  constructor() {
    this.register();
  }
}
