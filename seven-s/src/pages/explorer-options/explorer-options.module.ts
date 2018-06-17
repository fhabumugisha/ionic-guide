import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorerOptionsPage } from './explorer-options';

@NgModule({
  declarations: [
    ExplorerOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorerOptionsPage),
  ],
})
export class ExplorerOptionsPageModule {}
