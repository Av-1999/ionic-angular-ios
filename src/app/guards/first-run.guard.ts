import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstRunGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
    ) { this.init(); }

    init(){
      this.storage.create();
    }

  async canActivate() {
    console.log(await this.storage.get('run'));

    const name = await this.storage.get('run');
    if (name) {
      console.log('chka');
      this.router.navigate(['/signin']);
      return false;
    } else {
      console.log('ka');
      return true;
    }
  }

}
