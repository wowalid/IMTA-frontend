import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HorairesComponent } from './horaires.component';
import { HorairesRoutingModule } from './horaires-routing.module';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HorairesRoutingModule,

  ],
  declarations: [ HorairesComponent ]
})
export class HorairesModule { }
