import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {DashboardPageRoutingModule} from './tabs-page-routing.module';
import {TabsPage} from './tabs-page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsPageModule { }
