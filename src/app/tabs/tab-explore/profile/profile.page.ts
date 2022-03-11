/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PopoverPage } from 'src/app/popover/popover.page';
import { DatabaseService } from 'src/app/services/database.service';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  popover = false;
  whyAreYouHere = false;
  chooseWhyAreYouHere: any;
  anonymous = this.globalservice.anonymous;
  videos = this.globalservice.objectVideos;
  whyAreYouHereMessage: any = this.globalservice.objectWhyAreYouHere;
  config: SwiperOptions = {
    // slidesPerView: 3,
    // spaceBetween: 50,
    // navigation: true,
    // pagination: { clickable: true },
    // scrollbar: { draggable: true },
    pagination: { dynamicBullets: true, clickable: true }
  };
  user: any = { name: '' };
  constructor(
    private router: Router,
    private storage: Storage,
    private route: ActivatedRoute,
    private http: HttpService,
    private database: DatabaseService,
    public popoverController: PopoverController,
    private modalcontroller: ModalController,// tomorrow i will correct
    private globalservice: GlobalService,
    private alertController: AlertController) {
    this.init();
    const x = this.database.users.find(e => e.id == this.route.snapshot.params.id);
    console.log(x, 'xna aaaa');
    this.user = x;
  }

  init() {
    this.storage.create();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      showBackdrop: true,
      animated: true,
      mode: 'ios',
      arrow: false,
      backdropDismiss: true,
      dismissOnSelect: true,
      reference: 'event',
      size: 'auto',
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async ngOnInit() {
    console.log(this.user);
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
