import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
};

interface SignupResponse {
  username: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl: string = 'https://api.angular-email.com/auth';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/username`, {
      username
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.rootUrl}/signup`, credentials);
  }
}
