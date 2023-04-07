import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  @ViewChild('select') select!: ElementRef<HTMLSelectElement>;
  auth = inject(AuthService);
  model = new FormGroup({
    username: new FormControl<string>('', [
      Validators.minLength(2),
      Validators.maxLength(8),
      Validators.required,
    ]),
  });
  urlImage: string = this.auth.fakeUser.urlImage;
  loggedUser() {
    return this.auth.user$.getValue();
  }
  updateProfile(event: Event) {
    event.preventDefault();

    if (this.model.value.username) {
      this.auth.fakeUser.username = this.model.value.username;
    }
    if (this.select.nativeElement.value) {
      this.auth.fakeUser.notifications = this.select.nativeElement.value;
    }
    console.log(this.urlImage);
    this.auth.fakeUser.urlImage = this.urlImage;
    this.auth.user$.next(this.auth.fakeUser);
    this.auth.logout();
    this.auth.registerUser(this.auth.fakeUser);
    this.auth.loginUser(this.auth.fakeUser);
    this.modifica = !this.modifica;
  }
  modifica = false;
}
