import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjustesPage } from './ajustes';

@NgModule({
  declarations: [
    AjustesPage,
  ],
  imports: [
    IonicPageModule.forChild(AjustesPage),
  ],
  exports: [
    AjustesPage
  ]
})
export class AjustesPageModule {}
