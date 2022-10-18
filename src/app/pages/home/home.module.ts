import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage, NgbdModalConfirm} from './home.page';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
  ],
  declarations: [HomePage, NgbdModalConfirm],
  providers: [
    NgbActiveModal
  ]
})
export class HomePageModule {}
