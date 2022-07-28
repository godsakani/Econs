import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor( private auth : AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot): any{
   return this.auth.user$.subscribe((user: any) => {
      if(user) return true;
      this.router.navigate(['/login'], {queryParams:{ returnUrl: state.url}});
      return false;
    })
  }
}
