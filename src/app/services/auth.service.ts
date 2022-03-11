import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router
  ) {
    this.loadStoredToken();
    this.init();
  }
  init() {
    this.storage.create();
  }

  loadStoredToken() {
    const platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => from(this.storage.get(TOKEN_KEY))),
    );
    map((token: any) => {
      console.log('token from storage', token);
      if (token) {
        const decoded = helper.decodeToken(token);
        console.log('decoded: ', decoded);
        this.userData.next(decoded);
      } else {
        return null;
      }

    });
  }

  login(credentials: { email: string; password: string }): any {
    if (credentials.email !== 'saimon@mail.ru' || credentials.password !== '123') {
      return of(null);
    }
    return this.http.get('').pipe(
      // take(1),
      //  eslint-disable-next-line max-len
      map(res => `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`),
      switchMap(token => {
        const decoded = helper.decodeToken(token);
        console.log('login decoded: ', decoded);
        this.userData.next(decoded);

        this.storage.set(TOKEN_KEY, token);
        let storageObs;
        return storageObs;
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    // this.storage.remove(TOKEN_KEY).then(
    //   this.router.navigateByUrl('/');
    //   this.userData.next(null)
    // );
  }


  async getValue() {
    await this.storage.set('token', 'tokenaa-02dk2d29d23dk089uJ*h9OnjP;kah');// set key and value storage
  }
  async get() {
    console.log(this.storage.get('token')); //get values from storage width keys
    await this.storage.remove('token');
  }

}
