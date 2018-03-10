import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {TodosProvider} from '../../providers/todos/todos'

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})

@Injectable()
export class ContentPage {
  data: any;
  picAdress:string;
  constructor(public navCtrl: NavController, public todoProvider: TodosProvider) {
    this.picAdress="assets/img/coinIcon32_32/";
    let type=function (doc) {//değişiklik takibini filtrelemek için fonksiyon tanımlamak gerekli
      return doc.Type === 'Coins' || doc.Type==='Prices';
    };
    debugger;
    this.todoProvider.getTodosProvider(type).then((data) => {
      this.data = data;
    });
    //todoProvider.getTodosProvider(type);
  }

 }
