import { Pipe, PipeTransform } from '@angular/core';

// usage examples:
// {{ '1974-01-20' | age }}       --> only years
// {{ '1974-01-20' | age: 1 }}    --> only years
// {{ '1974-01-20' | age: 2 }}    --> only years and months
// {{ '1974-01-20' | age: 3 }}    --> years/months/days

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag: number = 1): any {
    let dt = new Date(dob);
    let diff = new Date(Date.now() - dt.getTime());
    let y = diff.getFullYear() - 1970;
    let m = diff.getMonth();
    let d = diff.getDate();

    switch(flag) {
      case 3: return `${y} years, ${m} months and ${d} days`;
      case 2: return `${y} years and ${m} months`;
    }

    return y + ' years.';
  }

}
