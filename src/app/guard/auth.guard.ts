import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  async checkSignIn(): Promise<boolean> {
    const aarthiyakToken = localStorage.getItem('aarthiyaktoken');

    if (!aarthiyakToken) {
      this.router.navigate(['/sign-in']);
      return false;
    } else {

      return true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkSignIn();
  }
}
