import { Injectable, Component } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth-guard.service';
import { YahooService } from '../yahoo.service';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuarder implements CanActivate, CanActivateChild, Resolve, CanDeactivate<LoginComponent> {
  isDeactivate: boolean = true;
  constructor(private authService: AuthService,
    private yahooService: YahooService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canDeactivate(component: LoginComponent): boolean {
    
    if (component.isFormValid) {
      alert("are you sure you want to navigate");
      return false;
    } else {
      return true;
    }
  }

    resolve(): any | Observable<any> | boolean{
      return this.yahooService.getYahooSampleInfo();
    }

  checkLogin(url: string): boolean {

      if(this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}