import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.firebaseAuth.authState
                .take(1)
                .map(user => !!user)
                .do(loggedIn => {
                  if(!loggedIn) {
                    this.router.navigate(['/login'])
                  }
                });
  }

}
