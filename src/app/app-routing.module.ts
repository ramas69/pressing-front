import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormCategoryComponent } from './form-category/form-category.component';

const routes: Routes = [
  {path:"", component:CategoryComponent},
  {path:"category/new", component:FormCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
