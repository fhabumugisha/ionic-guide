import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{


    quoteGroup : {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote){

  }
 /*  ionViewDidLoad() {
   this.quoteGroup = this.navParams.data;
   //Add elvis operator ? in the template to use this approch
  } */


}
