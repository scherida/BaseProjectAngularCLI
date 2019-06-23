import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  login() {
    this.loginService.login(this.form.email,this.form.pass);
  }
}
