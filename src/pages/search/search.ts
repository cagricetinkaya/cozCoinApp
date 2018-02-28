import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../../models/item';
import { Items, Api } from '../../providers/providers';

@IonicPage()

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  currentItems: any = [];
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public httpClientModule:HttpClientModule, public api:Api) { }


  getCoins(){

    let c  =  this.api.get('' + 'getData','')

    c.subscribe((res: any) => {
      if (res.success == true) {
        this.data= JSON.stringify(res.data);
      }
    }, err => {
      console.error('ERROR', err);
    });

  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
