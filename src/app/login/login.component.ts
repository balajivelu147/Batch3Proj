import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  loginTitle: string = "Enter credentials to login";
  password: string;
  loginTypeItems: string[] = ['Admin', 'Customer'];
  loginType: string;
  constructor() { }

  ngOnInit(): void {
    // when page load completes --> this is similar to "document.onload"
  }

  SignIn(): void {

    let ResultObject = `{
    userName: ${this.userName},
    pasword: ${this.password},
    loginType: ${this.loginType}
    }
    `;
    console.log(ResultObject);
  }

}
