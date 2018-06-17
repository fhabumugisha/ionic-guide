import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationOptionsPage } from './location-options';

@NgModule({
  declarations: [
    LocationOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationOptionsPage),
  ],
})
export class LocationOptionsPageModule {}
