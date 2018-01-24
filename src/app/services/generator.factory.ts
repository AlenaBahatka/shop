import { InjectionToken, Injectable } from '@angular/core';

export const Generator = new InjectionToken<any[]>('Generator');

export function GeneratorService (length: number ) {
  return function(): any[] {
    const text = [];
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
    };

}


