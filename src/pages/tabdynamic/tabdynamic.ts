import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabdynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabdynamic',
  templateUrl: 'tabdynamic.html',
})
export class TabdynamicPage {
  tabs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.tabs = [
    //   { title: "Ayarlar", root: 'SettingsPage' },
    //    { title: "Koinler", root: 'ListMasterPage' }
    //   // { title: "Map", root: 'ListMasterPage' },
    //   // { title: "About", root: 'ListMasterPage' },
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabdynamicPage');
  }

}
