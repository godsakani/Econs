import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from "@angular/router";
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.default.User | null | undefined>; 
  constructor(
    private afAuth: AngularFireAuth , public router: Router , private route: ActivatedRoute// Inject Firebase auth service
  ) {
    this.user$ = afAuth.authState;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  AuthLogin(provider: any) {
   let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl',returnUrl);
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['check-out']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // login(){
  //   this.afAuth.signInWithRedirect( new firebase.default.auth.GoogleAuthProvider());
  // }

  logout(){
    return this.afAuth.signOut().then(() =>{
      this.router.navigate(['login']);
    })
  }
}