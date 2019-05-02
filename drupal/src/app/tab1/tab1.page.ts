import { Component } from "@angular/core";
import { ArticleService } from "../services/article.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private articleService: ArticleService) {}
  ionViewDidLoad() {
    this.articleService.fecthArticles().subscribe(data => {
      console.log(data);
    });
  }
}
