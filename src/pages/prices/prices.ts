import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {TodosProvider} from '../../providers/todos/todos'

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})

@Injectable()
export class PricesPage {
  data: any;
  picAdress: string;
  id: any;
  stockid: any;

  constructor(public navCtrl: NavController, public todoProvider: TodosProvider, params: NavParams) {
    this.picAdress = "assets/img/32x32/";
    this.stockid = params.data;
    let type = function (doc) {//değişiklik takibini filtrelemek için fonksiyon tanımlamak gerekli
      return doc.stockId === this.stockid || doc.Type === 'Prices';
    };
    this.changeItem(type);
  }

  changeItem(type) {
    this.id = this.todoProvider.getTick(type).subscribe(data => {
      this.data = data;
    });
  }
}

