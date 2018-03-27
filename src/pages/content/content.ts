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
  id:any;
  constructor(public navCtrl: NavController, public todoProvider: TodosProvider) {
    this.picAdress="assets/img/32x32/";
    let type=function (doc) {//değişiklik takibini filtrelemek için fonksiyon tanımlamak gerekli
      return doc.Type === 'Coins' || doc.Type==='Prices';
    };
    this.changeItem(type);
  }

  changeItem(type) {
    this.id= this.todoProvider.getTick(type).subscribe(data=>{
      this.data=data;
    });
    // this.todoProvider.getTodosProvider(type).then((data) => {
    //   this.data = data;
    // });
  }
}

