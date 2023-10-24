import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from './ICategory';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICategory[], search:string ): ICategory[] {
    if (!search) {
      return value; // Aucune recherche, retourne toutes les catégories
    }
    console.log(search);
    
    return value.filter(term => term.name?.toLowerCase().includes(search.toLowerCase()));
  }

}
