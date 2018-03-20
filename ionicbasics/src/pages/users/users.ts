import { UserPage } from './user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController){}

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name} );
  }



}
