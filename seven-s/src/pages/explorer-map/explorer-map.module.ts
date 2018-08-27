import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorerMapPage } from './explorer-map';

@NgModule({
  declarations: [
    ExplorerMapPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorerMapPage),
  ],
})
export class ExplorerMapPageModule {}
