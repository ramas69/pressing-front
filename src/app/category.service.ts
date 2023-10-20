import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from './ICategory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private route:Router) { }

  url ="http://127.0.0.1:8000/api/categories";

  fetchAll(){
    return this.http.get<ICategory[]>(this.url);
  }

  add(category:ICategory){
    return this.http.post<ICategory>(this.url, category);
   

  }
}
