import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true }
  };

  constructor(
    private storage: Storage,
    private auth: AuthService) { this.init(); }

  init() {
    this.storage.create();
  }

  signInBox() {
    console.log('datatata');
  }

  async ngOnInit() {
    console.log('next');

    await this.storage.set('run', 'aldeady run');
    await this.auth.getValue();
  }

}
