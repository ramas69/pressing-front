import { Component, OnInit } from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titre:string = "on est lundi !";
  date:number = Date.now();
  date2:Date = new Date();
  texte:string ="Ma très longue phrase que j'aimerais raccourcir et mettre en majuscules en utilisant des pipes";
  noms:string[]=['Ameliah', 'Quentin', 'Alicia', 'Alexandre','Zoé' ];
  search:string[] = [""];

 
  ngOnInit(): void {
      const observable = new Observable(( observer:Observer<any>)=>{
        const data = 2;
        observer.next(data);
        observer.next(3);
        observer.error(3);
        observer.next(4);
        observer.next(5);
      });

      console.log(observable);
      
      const observer = {
        next: (a:number) => console.log('next: ', a),
        complete:()=> console.log('complete'),
        error:(a:number)=>console.error('erreur : ', a)
        
      };
      observable.subscribe(observer);

  }


 
}
