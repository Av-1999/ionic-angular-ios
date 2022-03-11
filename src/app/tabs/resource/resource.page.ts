import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {

  userData: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private database: DatabaseService,
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
