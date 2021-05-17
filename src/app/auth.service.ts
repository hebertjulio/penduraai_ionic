import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private authenticated = false;

  constructor(
    private router: Router
  ) { }

  setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticated) {
      this.router.navigateByUrl('login');
    }
    return this.authenticated;
  }
}
