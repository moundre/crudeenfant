import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppressionPage } from './suppression.page';

const routes: Routes = [
  {
    path: '',
    component: SuppressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppressionPageRoutingModule {}
