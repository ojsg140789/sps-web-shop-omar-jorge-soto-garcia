import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { UserInterface } from '@app/models/user-interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaeAuth = inject(Auth);
  user$ = user(this.firebaeAuth);
  currentUserSignal = signal<UserInterface | null | undefined >(undefined);

  constructor() { }

  register(username: string, email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaeAuth, email, password)
      .then(response => updateProfile(response.user, { displayName: username }));
    return from(promise);
  }

  login( email: string, password: string ): Observable<void> {
    const promise = signInWithEmailAndPassword( this.firebaeAuth, email, password)
      .then(() => {});
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaeAuth);
    return from(promise);
  }
}
