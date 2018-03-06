import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {TodosProvider} from '../../providers/todos/todos'

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})

@Injectable()
export class ContentPage {

  constructor(public navCtrl: NavController, public todoProvider:TodosProvider) {

    todoProvider.getTodosProvider();

  }



}
