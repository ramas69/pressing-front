import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maj'
})
export class MajPipe implements PipeTransform {

  transform(value:string ):string {
    return value.toUpperCase();
  } 

}
