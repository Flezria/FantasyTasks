import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ProfileData } from '../models/profiledata.interface';

@Injectable()
export class AuthService {

user: Observable<any>;
profileDataCollectionRef: AngularFirestoreDocument<ProfileData>;

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
    this.user = firebaseAuth.authState;
  }

  get currentUserUID() {
    return this.firebaseAuth.auth.currentUser.uid;
  }

  signup(email: string, password: string, profileData: ProfileData) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(value => {
          this.saveProfileData(profileData);
          this.router.navigate(['/login']);
        })
        .catch(err => {
          console.log('Failure!', err.message);
        })
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(value => {
          this.router.navigate(['/frontpage']);
        })
        .catch(err => {
          console.log("Error", err.message);
        })
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  saveProfileData(profileData: ProfileData) {
    this.profileDataCollectionRef = this.afs.collection<ProfileData>('users/').doc(this.currentUserUID);
    this.profileDataCollectionRef.set(profileData)
        .then(resp => {
          console.log("Success. Added user profile");
        })
        .catch(err => {
          console.log("Error", err.message);
        })
  }

}
