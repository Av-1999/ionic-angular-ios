import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/popover/popover.page';
import { GlobalService } from 'src/app/services/global.service';
import { SwiperOptions } from 'swiper';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {
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
  constructor(
    private storage: Storage,
    private router: Router,
    private vibrate: Vibration,
    public popoverController: PopoverController,
    private modalcontroller: ModalController,// tomorrow i will correct
    private globalservice: GlobalService,
    private alertController: AlertController,
    private database: DatabaseService
  ) { this.init(); }

  init(){
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

  openPopover() {
    return this.popover = !this.popover;
  }

  closeWhyAreYouHere() {
    return this.whyAreYouHere = !this.whyAreYouHere;
  }

  whyAreYouHereChoosed(answer: any) {
    // vibrate
    this.vibrate.vibrate(100);
    // vibrate
    answer.chosed = !answer.chosed;
    this.chooseWhyAreYouHere = answer;
  }

  sendWhyAreYouHere() {
    const answers = this.globalservice.objectWhyAreYouHere.filter((e: any) => e.chosed === true);
    if (this.chooseWhyAreYouHere.message) {
      this.closeWhyAreYouHere();
      console.log(answers);//choosed answers
      // send data to backend here
      // answers.message // where message is string; answers is array
    } else {
      console.log('chose something');
    }
  }





  async ngOnInit() {

    const email = await this.storage.get('email');
    const isStarted = await this.storage.get('firstStart');

    const user = this.database.users.find(e => e.email === email);

    if (isStarted) {// if started dont show alert
      this.whyAreYouHere = !this.whyAreYouHere;
      this.storage.remove('firstStart');
    }
    if (!user) {
      console.log('no users redirect to signin');
      this.router.navigateByUrl('/signin');
    } else {
      console.log(user);
      this.userData = user;
    }



  }

}
