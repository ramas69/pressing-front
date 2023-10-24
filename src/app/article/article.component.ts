import { Component, OnInit } from '@angular/core';
import { IArticle } from '../IArticle';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  implements OnInit{

  articles:IArticle[]=[];
  articleParent:IArticle | undefined;
  constructor(private service: ArticleService){}

  ngOnInit(): void {
    this.getAll();
      
  }

  selectArticle(article:IArticle){
    this.articleParent =article;
  }

  recevoirMessage(message:string){
    console.log("message reçu du component enfant",message);
    
  }



getAll(){
  this.service.fetchAll().subscribe(data =>{
    this.articles = data;
  })
}



}
