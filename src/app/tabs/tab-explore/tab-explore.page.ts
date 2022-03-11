import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from 'src/app/services/database.service';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tab-explore',
  templateUrl: './tab-explore.page.html',
  styleUrls: ['./tab-explore.page.scss'],
})
export class TabExplorePage implements OnInit {
  userData: any;
  users = this.database.users;
  params: any;
  search: string;
  filtered: any;
  tm: any;
  constructor(
    private globalService: GlobalService,
    private database: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private router: Router
  ) { this.init(); }

  init() {
    this.storage.create();
  }

  searchData(event: any) {
    const x = event.target.value;
    clearTimeout(this.tm);
    this.tm = setTimeout(() => {
      this.filtered = [];
      this.search = '';
      this.search = x;
      this.filtered = this.database.users.filter(e => e.name.toLowerCase().startsWith(x.toLowerCase()));
      console.log(this.filtered);
    }, 1000);
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
