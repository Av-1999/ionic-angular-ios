import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { GlobalService } from './services/global.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  // closed$ = new Subject<any>();
  // showtools: boolean;
  constructor(

    private service: GlobalService,
    private router: Router) {}

  // showToolsBar(): boolean {
  //   return this.showtools;
  // }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   takeUntil(this.closed$),
    // ).subscribe((event: any) => {
    //   if (
    //     event.url === '/begin' ||
    //     event.url === '/next' ||
    //     event.url === '/signin' ||
    //     event.url === '/known-page' ||
    //     event.url === '/warning' ||
    //     event.url === '/'
    //   ) {
    //     this.showtools = false;
    //   } else {
    //     this.showtools = true;
    //   }
    // });
  }

}
