import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onManageIngredients() {
    const alert = this.alertCtrl.create({
      title :'Manage ingredients',
      //subTitle:'What do you want to do ?',
      message: ' What do you want to do ?',
      buttons: [
        {
          text : 'Add ingredient',
          handler :() =>{

          }
        },
        {
          text: 'Remove all ingredients',

          handler : () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler : () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();

  }

}
