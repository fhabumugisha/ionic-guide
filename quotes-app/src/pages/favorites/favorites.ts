import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';



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
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
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
