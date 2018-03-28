import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  nbTapped: number = 0;
  nbPressed : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  onDidReset(resetType: string){
    switch (resetType) {
      case  'all' :
        this.nbPressed = 0;
        this.nbTapped = 0;
        break;
      case 'taps' :
      this.nbTapped = 0;
      break;
      case 'presses' :
      this.nbPressed = 0;
      break;
      default:
      this.nbPressed = 0;
      this.nbTapped = 0;
    }

  }

  onTapped() {
    this.nbTapped = this.nbTapped + 1;
  }
  onPressed() {
    this.nbPressed = this.nbPressed + 1;
  }
  onRestPresses() {
    this.nbPressed = 0;
  }
  onResetTaps() {
    this.nbTapped = 0;;
  }
  onResetAll() {
    this.nbTapped = 0;
    this.nbPressed = 0;
  }

  isWon() {
    return (this.nbPressed == 3) && (this.nbTapped == 2)
  }
}
