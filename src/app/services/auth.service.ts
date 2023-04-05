import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type User = {
  username : string,
  password : string,
  urlImage : string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<User | null>(null);
  registerUser(user :User){
    if(!this.searchUser(user.username).username){
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
  searchUser(username : User['username']|null){
    return JSON.parse(localStorage.getItem('user') ?? '{}')
  }
  loginUser(user :User){
    const userFound:User = this.searchUser(user.username)
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
