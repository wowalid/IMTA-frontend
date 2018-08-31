import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
    import { CommonModule } from '@angular/common';

import { ActuComponent } from './actu.component';

const routes: Routes = [
  {
    path: '',
    component: ActuComponent,
    data: {
      title: 'Actualités'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActuRoutingModule {}
