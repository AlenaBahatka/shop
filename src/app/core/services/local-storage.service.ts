import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key, data) {
    localStorage.setItem(key, data);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  removeItem(index) {
    localStorage.removeItem(index);
  }
}
