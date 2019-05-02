import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import "rxjs/Rx";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  fecthArticles() {
    console.log("fecthArticles");
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this.http.get(
      "http://dev-restapi.pantheonsite.io/node/1?_format=json"
    );
  }
}
