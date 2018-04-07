import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PricesPage} from './prices';

@NgModule({
  declarations: [
    PricesPage,
  ],
  imports: [
    IonicPageModule.forChild(PricesPage),
    TranslateModule.forChild()
  ],
  exports: [
    PricesPage
  ]
})
export class ContentPageModule { }
