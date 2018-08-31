import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ActuComponent } from './actu.component';
import { ActuRoutingModule } from './actu-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ActuRoutingModule,
    CommonModule

  ],
  declarations: [ ActuComponent ]
})
export class ActuModule { }
