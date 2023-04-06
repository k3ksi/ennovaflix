import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type User = {
  username : string,
  email: string,
  password : string,
  urlImage : string,
  notifications : string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);
  fakeUser =
    {
      username: 'Andrea',
      password: '1234',
      urlImage: 'avatar1.svg',
      email : 'test@ennovaflix.com',
      notifications : 'basso'
  }
  registerUser(user :User){
    if(!this.searchUser(user.email).email){
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
  searchUser(email : User['email']|null){
    return JSON.parse(localStorage.getItem('user') ?? '{}')
  }
  loginUser(user :User){
    const userFound:User = this.searchUser(user.email)
    if(userFound){
      if(user.password === userFound.password){
        this.user$.next(userFound);
        return userFound;
      }
    }
    return {};
  }
  logout(){
    this.user$.next(null);
    localStorage.removeItem('user');
  }
  constructor() {
    const getItem = localStorage.getItem('user');

    if(getItem){
      const currentUser = JSON.parse(getItem);
      if(currentUser){
      } this.loginUser(currentUser)
      this.user$.next(currentUser);
    }


  }
}
