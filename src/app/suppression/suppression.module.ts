import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppressionPageRoutingModule } from './suppression-routing.module';

import { SuppressionPage } from './suppression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppressionPageRoutingModule
  ],
  declarations: [SuppressionPage]
})
export class SuppressionPageModule {}
