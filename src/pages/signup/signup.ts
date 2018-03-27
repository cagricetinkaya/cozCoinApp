import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers/providers';
import {TodosProvider} from '../../providers/todos/todos'


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: {  Email: string, Password: string, Type: string } = {
    Email: '',
    Password: '',
    Type:'User'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController, public user: User,public translateService: TranslateService, public todoProvider: TodosProvider) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    this.todoProvider.createTodosProvider(this.account);
  }
}
