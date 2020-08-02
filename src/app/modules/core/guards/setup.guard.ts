import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SetupGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /* Determin if system is setup. If setup resolve to true, else resolve to false */
    return this.dataService
      .checkSetup()
      .then( res => {
        if(res.total == 0) {
          this.router.navigate(['/setup']);
        } else {
          return true;
        }
      })
      .catch(() => {
        this.router.navigate(['/auth/login']);
        return false;
      });
  }
  
}
