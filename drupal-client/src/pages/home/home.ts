import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {

  constructor(public navCtrl: NavController, public articleService: ArticleService) {

  }

 ionViewDidLoad() {
    this.articleService.fecthArticles().subscribe(
      ( data) => {
        console.log(data);
      }
    );
  }
  

}
