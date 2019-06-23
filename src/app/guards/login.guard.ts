import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session/session.service';
import { Constants } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    var token = SessionService.getItem(Constants.AUTH_LOGIN);

    if (token == undefined) {
      this.router.navigate(['/login']);
    }

    if (token != 'null') {
      return true;
    } else {
      this.router.navigate(['/login']);
    }

  }
}
