import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private storage: Storage
    ) {
  }

 async canActivate() {
    // this.auth.user.pipe(
    //   take(1),
    //   map(user => {
    //     console.log('in canactive: ', user);
    //     if (!user) {
    //       this.alertCtrl.create({
    //         header:'Unauthorized',
    //         message:'you are not allowed to access that page',
    //         buttons:['OK']
    //       });
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   })
    // );
    // this.router.navigate(['/signin']);
    console.log(this.storage.get('token'));
    const name = await this.storage.get('token');
    if(name){
      console.log('ka');
      return true;
    }else{
      console.log('chka');
      this.router.navigate(['/signin']);
      return false;
    }

  }

}
