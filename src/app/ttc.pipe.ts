import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {

  transform(value: number, taux:number): number{
   // return value*taux+value;
    return value*taux;
  }

}
