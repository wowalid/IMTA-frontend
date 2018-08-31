import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ActuComponent } from './actu.component';
import { ActuRoutingModule } from './actu-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpModule } from '@angular/http';
import { ActuService } from '../actu.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    ActuRoutingModule,
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  declarations: [ ActuComponent ],
  providers: [ ActuService ]
})
export class ActuModule { }
