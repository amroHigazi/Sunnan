import { ActivatedRouteSnapshot,  CanActivate,  CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

export const auththGuard: CanActivateFn = (route, state) => {
  return true;
};
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      window.alert("Access not allowed!");
      this.router.navigate(['log-in'])
    }
    return true;
  }
}