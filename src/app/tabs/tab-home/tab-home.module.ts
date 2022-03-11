import { NgModule } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from './tab-home.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TabHomePageRoutingModule } from './tab-home-routing.module';
import { RouteReuseStrategy } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule,
  ],
  declarations: [TabHomePage],
  providers:[
    Vibration,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ]
})
export class TabHomePageModule {}
