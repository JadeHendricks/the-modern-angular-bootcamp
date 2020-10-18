import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com/auth';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/username`, {
      username
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.rootUrl}/signup`, credentials)
      .pipe((
        tap(() => {
          this.signedin$.next(true);
        })
      ));
  }

  checkAuth(): Observable<SignedInResponse> {
    return this.http.get<SignedInResponse>(`${this.rootUrl}/signedin`)
      .pipe(
        tap(({authenticated}) => {
          this.signedin$.next(authenticated);
        })
      );
  }
}
