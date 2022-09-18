import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {Tab2PageRoutingModule} from './tab2-routing.module';

import {Tab2Page} from './tab2.page';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {TimelineModule} from 'primeng/timeline';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    MatCardModule,
    MatButtonModule,
    TimelineModule,
    ButtonModule,
    TimelineModule,
    CardModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
