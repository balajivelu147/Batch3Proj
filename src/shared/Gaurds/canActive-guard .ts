import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from  '@angular/router';
import { AuthService } from './auth.service';
import {YahooService} from 'src/shared/yahoo.service';



@Injectable(
  {providedIn: 'root'}
)
export class AuthGuarder implements CanActivate, CanActivateChild, Resolve<any> {

  constructor( private authService: AuthService, 
    private yahooService: YahooService, private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
resolve(): any
{
return this.yahooService.getYahooSampleInfo
}
  checkLogin(url: string): boolean {

    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page witisLoggedInh extras
    this.router.navigate(['/login']);
    return false;
  }
}



//./auth.service'