import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);

  constructor() {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http
      .post('https://dummyjson.com/auth/login', user)
      .pipe(
        tap((response: any) => this.doLoginUser(user.username, response.token))
      );
  }

  private doLoginUser(username: string, token: any) {
    this.loggedUser = username;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
  getCurrentUser() {
    let token = localStorage.getItem(this.JWT_TOKEN);
    return this.http.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  isLoggedIn() {
    // return this.isAuthenticatedSubject.value;
    return !!localStorage.getItem(this.JWT_TOKEN);
  }
  // isTokenExpired() {
  //   const token = localStorage.getItem(this.JWT_TOKEN);
  //   if (!token) return true;

  //   const decoded = jwtDecode(token);
  //   const expirationDate = decoded.exp * 1000;

  //   const now = new Date().getTime();
  //   return expirationDate < now;
  // }

  // refreshToke() {
  //   this.http
  //     .post<any>('https://dummyjson.com/auth/refresh', {})
  //     .pipe(tap((tokens: any) => this.storeJwtToken(tokens.access_token)));
  // }
}
