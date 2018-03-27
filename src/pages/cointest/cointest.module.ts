import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CointestPage } from './cointest';

@NgModule({
  declarations: [
    CointestPage,
  ],
  imports: [
    IonicPageModule.forChild(CointestPage),
    TranslateModule.forChild()
  ],
  exports: [
    CointestPage
  ]
})
export class CointestModule { }
