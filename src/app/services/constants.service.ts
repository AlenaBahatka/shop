import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  getConstants () {
    return  { App: 'TaskManager', Ver: '1.0' };
  }
}
