import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ArticleService {
constructor(private http: HttpClient) {}
 fecthArticles() {
    console.log('fecthArticles');
    const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*'
  })
};
    return this.http
      .get("http://rennesovtout.buseni.com/wp-json/wp/v2/posts");
  }
}