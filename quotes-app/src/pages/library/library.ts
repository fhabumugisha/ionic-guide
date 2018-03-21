import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{


  quoteCollection : {category: string, quotes: Quote[], icon: string} [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.quoteCollection =  quotes;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
