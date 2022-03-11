/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userData: any;
  users: any = this.database.users.filter(e => e.id < 4);
  constructor(
    private router: Router,
    private storage: Storage,
    private database: DatabaseService,
    public alertController: AlertController

  ) { this.init(); }

  init() {
    this.storage.create();
  }

  async ngOnInit() {
    const email = await this.storage.get('email');
    const user = this.database.users.find(e => e.email === email);
    if (!user) {
      console.log('no users redirect to signin');
      this.router.navigateByUrl('/signin');
    } else {
      console.log(user);
      this.userData = user;
    }
  }

}
