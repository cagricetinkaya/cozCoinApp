import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TodosProvider} from '../../providers/todos/todos';

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
  data: any;
  id: any;

  isTabLoaded = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoProvider: TodosProvider) {
    this.changeItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabdynamicPage');
  }

  changeItem() {
    this.todoProvider.getData().then((data) => {
      this.tabs = data;
      this.isTabLoaded=true;
    });

  }
}


