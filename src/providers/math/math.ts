import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the MathProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MathProvider {

  observerId: any;
  myObserver: any;
  isRunning = false;
  count: any = 0;

  constructor() {
    console.log('Hello MathProvider Provider');
  }

  getTick(): Observable<any> {
    this.observerId = Observable.create(observer => {
      this.myObserver = observer;
      this.startTimer();
    });
    return this.observerId;
  }

  startTimer() {
    this.isRunning=true;
    this.tick();
  }

  tick() {
    setTimeout(x => {
      if (this.isRunning) {
        this.myObserver.next("Hello " + this.count);
        this.count= this.count+1;
        this.tick();
      }
    }, 500)
  }

  stopTimer()
  {
    this.isRunning=false;
  }

  getPromise(a: number, b: number): Promise<any> {
    let p = new Promise((resolve, reject) => {
      if (a == b) {
        resolve("Sayılar Eşit");
      }
      else {
        reject("Upps!!!, sayılar farklı")
      }
    });
    return p;
  }

  testRace() {
    var promise1 = new Promise(function (resolve, reject) {
      //resolve("Hello from 1. Promise");
      setTimeout(resolve, 300, "Hello from 1. Promise")
    });

    var promise2 = new Promise(function (resolve, reject) {
      //resolve("Hello from 2. Promise");
      setTimeout(resolve, 100, "Hello from 2. Promise")
    });

    Promise.race([promise1, promise2]).then(value => {
        alert(value);
      }
    ).catch(err => {
      alert(err);
    });
  }

}
