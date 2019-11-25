import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';


// usage example:
// {{ contact | fullname }}

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(c: Contact): any {
    let prefix = c.gender === 'Male' ? 'Mr.' : 'Ms.';
    // return `${prefix}${c.firstname} ${c.lastname}`;
    return prefix + c.firstname + ' ' + c.lastname;
  }

}
