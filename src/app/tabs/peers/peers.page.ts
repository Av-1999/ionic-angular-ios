import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from 'src/app/services/database.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.page.html',
  styleUrls: ['./peers.page.scss'],
})
export class PeersPage implements OnInit {
  userData: any;
  category: any = this.globalService.objectCategory;
  peers: any = this.globalService.objectPeerContent;
  constructor(
    private globalService: GlobalService,
    private storage: Storage,
    private database: DatabaseService,
    private router: Router
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
