import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {

  constructor( private service:CategoryService, private route:Router){}

  public form:FormGroup = new FormGroup({
    name:new FormControl('')
  })

  onSubmit(){
    if(this.form.valid){
      this.service.add(this.form.value).subscribe(response => {
        console.log("marche", response);
        this.route.navigate(['/']);
        
      })
    }
 
  }


}
