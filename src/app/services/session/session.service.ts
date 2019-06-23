import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public static getItem( key : string ): string {
    try {
      return atob(localStorage.getItem(key));
    } catch (e){}
  }

  public static setItem( key : string, value : string ): void {
    try {
      localStorage.setItem(key, btoa(value));
    } catch (e){}
  }

  public static removeItem( key : string ): void {
    try {
      localStorage.removeItem(key);
    } catch (e){}
  }
}
