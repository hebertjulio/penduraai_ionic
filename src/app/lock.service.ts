import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LockService implements CanActivate {

  private unlocked = false;

  constructor(
    private router: Router
  ) { }

  setUnlocked(unlocked: boolean) {
    this.unlocked = unlocked;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.unlocked) {
      this.router.navigateByUrl('profile-choose');
    }
    return this.unlocked;
  }
}
