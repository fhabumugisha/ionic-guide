import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Navbar } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { SettingsService } from '../../services/settings';



@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[] = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService : QuotesService,
              public modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  getBackground(){
   return this.settingsService.isAltBackground() ? 'altQuoteBackground'  : 'quoteBackground';
  }
  ionViewWillEnter(){
   this.quotes = this.quotesService.getFavoritesQuotes();

  }

  onViewQuote(selectedQuote: Quote){
    let modal = this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();

    modal.onDidDismiss( (remove: boolean) => {
      if(remove) {
        this.onRemoveFromFavorites(selectedQuote);
      }
    } );
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoritesQuotes();
  }


  }
