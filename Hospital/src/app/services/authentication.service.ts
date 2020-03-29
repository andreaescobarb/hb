import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  autheticationState = new BehaviorSubject(false); 
  constructor(private storage: Storage, private plt: Platform) { 
    this.checkToken();
  }

  login(){
    return this.storage.set(TOKEN_KEY,'k123').then(res => {
      this.autheticationState.next(true);
    });
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.autheticationState.next(false);
    });
  }

  isAuthenticated(){
    return this.autheticationState.value;
  }

  //validar si el token esta válido, no expirado, etc.
  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res){
        this.autheticationState.next(true);
      }
    });
  }

}
