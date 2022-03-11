import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage-angular';
import { SwiperOptions } from 'swiper';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true }
  };
  constructor(
    private router: Router,
    // private storage: Storage,
    private auth: AuthService) { }

  async ngOnInit() {
    console.log('begin');
    // if(await this.storage.get('run')){
    //   this.router.navigate(['/signin']);
    // }
   await this.auth.get();
  }

}
