import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UnsplashResponse {
  urls: {
    regular: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchingService {

  constructor(private http: HttpClient) { }

  getPhoto(): Observable<UnsplashResponse> {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID AX3kf1Cb5tmiTA4PWa8QayPyMktaT8gyW27mTcVxekw'
      }
    });
  }
}
