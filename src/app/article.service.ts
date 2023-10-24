import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from './IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor( private http:HttpClient){}
  url ="http://127.0.0.1:8000/api/articles";

  fetchAll(){
    return this.http.get<IArticle[]>(this.url);
  }


}
