import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public static getItem( key : string ): string {
    try {
      var item = localStorage.getItem(key);
      if( item != undefined && item != "" ){
        return atob(item);
      }
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
