import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth-guard.service';
import { Router } from '@angular/router';

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
  message;
  constructor(public authService: AuthService, public router: Router) { }

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
  login() {
    this.message = 'Trying to log in ...';
  
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
  
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  isFormValid() {
    return true;
  }

}
