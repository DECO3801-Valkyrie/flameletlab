import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
