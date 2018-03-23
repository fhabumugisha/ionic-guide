import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

    quoteGroup : {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  private alertCtrl : AlertController,
  private quotesService:  QuotesService) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title :'Add quote',
      subTitle:'Are you sure ?',
      message: ' Are you sure you want to add the quote ?',
      buttons: [
        {
          text : 'Yes , go ahead',
          handler :() =>{
              this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler : () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }
 /*  ionViewDidLoad() {
   this.quoteGroup = this.navParams.data;
   //Add elvis operator ? in the template to use this approch
  } */
  onRemoveFromFavorites(selectedQuote: Quote){
      this.quotesService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavorite(quote: Quote){
      return  this.quotesService.isQuoteFavorite(quote);
  }
}
