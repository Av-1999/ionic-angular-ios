import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  showtools = true;
  showtabs = true;
  closed$ = new Subject<any>();
  constructor(
    private router: Router
  ) { }

  showToolsBar() {
    return this.showtools;
  }


  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe((event: any) => {
      //tools
      if (
        event.url === '/tabs/user-profile' ||
        event.url === '/account'

      ) {
        this.showtools = false;
      } else {
        this.showtools = true;
      }
      // tabs
      if (
        event.url === '/tabs/user-profile' ||
        event.url === '/account'

      ) {
        this.showtabs = false;
      } else {
        this.showtabs = true;
      }
    });

  }



}
