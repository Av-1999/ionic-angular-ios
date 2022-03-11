import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-known-page',
  templateUrl: './known-page.page.html',
  styleUrls: ['./known-page.page.scss'],
})
export class KnownPagePage implements OnInit {

  anonymous: boolean;
  constructor(
    private globalService: GlobalService,
    private databaseService: DatabaseService,
    private storage: Storage,
    private auth: AuthService) { }

  onClick() {
    this.anonymous = !this.anonymous;
    this.globalService.anonymous = this.anonymous;
  }
  continue() {
    this.storage.get('email').then((e: any) => {
      if(e){
        const data = this.databaseService.users.find((el: any) => el.email === e);
        if(this.anonymous === undefined){
          this.anonymous = false;
        }
        data.anonymous = this.anonymous;
        console.log(data);
      }else{
        console.log('chka storage um email pahac');
      }
    });
  }

  ngOnInit() {
    console.log('known-page');

    this.auth.getValue();
  }

}
