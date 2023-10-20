import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service : CategoryService){}

  categories:ICategory[]=[];

ngOnInit() {
    this.service.fetchAll().subscribe(data =>{
      console.log(data);
      
      this.categories = data;
    })
}



}
