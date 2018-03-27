import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {MathProvider} from '../../providers/math/math';

@IonicPage()

@Component({
  selector: 'page-cointest',
  templateUrl: 'cointest.html'
})

export class CointestPage {

  value: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public httpClientModule: HttpClientModule, public math: MathProvider) {

  }

  promiseTest(a: number, b: number) {
    this.math.getPromise(a, b).then(data => {
      alert("Success : " + data);
    }).catch(err => {
      alert("Err is : " + err);
    })
  }

  promiseRace() {
    this.math.testRace();
  }

  start() {
    this.id = this.math.getTick().subscribe(data => {
      this.value = data;
    });
  }

  stop() {
    this.id.unsubscribe();
    this.math.stopTimer();
  }
}
