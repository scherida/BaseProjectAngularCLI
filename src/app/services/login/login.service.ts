import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';
import { Constants } from 'src/app/models/Constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: Observable<firebase.User>;
  public isAuth = false;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState;

    var token = SessionService.getItem(Constants.AUTH_LOGIN);
    this.isAuth = ( token != undefined && token != null && token != "" );
  }
  
  public login(mail: string, password: string) {

    return new Promise((resolve, reject) => {

      this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
        SessionService.setItem(Constants.AUTH_LOGIN, user.user.refreshToken);
        console.log(user);
        this.router.navigate(['inicio']);
        this.isAuth = true;
      })
        .catch((error) => {
          console.log(error);
          alert("Deu ruim");
          this.isAuth = false;
        });
    })
      .catch((error) => {
        console.log(error);
        alert("Deu mais ruim anida");
        this.isAuth = false;
      });
  }

  public logout() {
    this.afAuth.auth.signOut();
    SessionService.removeItem(Constants.AUTH_LOGIN);
    this.isAuth = false;
    this.router.navigate(['inicio']);
  }
}