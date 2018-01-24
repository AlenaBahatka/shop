import { Injectable } from '@angular/core';
import { LoginOptions } from './model/login-options.model';

@Injectable()
export class ConfigOptionsService {

  loginOptions: LoginOptions;

  constructor() { }

  saveLoginOptions(login: string, id: number, email: string) {
    this.loginOptions = new LoginOptions(id, login, email);
  }
}
