import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HorairesComponent } from './horaires.component';

const routes: Routes = [
  {
    path: '',
    component: HorairesComponent,
    data: {
      title: 'Horaires'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorairesRoutingModule {}
