import { Pipe, PipeTransform } from '@angular/core';

// example usages: 
// contacts | filter: searchText
// contacts | filter: searchText: 'firstname'
// contacts | filter: searchText: ['firstname', 'lastname', 'city']

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<any>, filterText: string, fields: any): any {
    if (!filterText) return data;

    let re = new RegExp(filterText, 'i');

    if (!fields) {
      // search in all fields
      fields = Object.keys(data[0]);
      return data.filter(d => this.searchTextFound(d, re, fields))
    }
    else if (fields instanceof Array) {
      // search in specific fields
      return data.filter(d => this.searchTextFound(d, re, fields))
    }
    else if (typeof fields === 'string') {
      // search in one specific field
      return data.filter(d => re.test(d[fields]));
    }
    // *ngFor="let c of contacts | filter: searchText"
    // *ngFor="let c of contacts | filter: searchText: 'firstname'"
    // *ngFor="let c of contacts | filter: searchText: ['firstname', 'lastname', 'country']"
  }

  searchTextFound(d: any, re: any, fields: any) {
    for (let i = 0; i < fields.length; i++) {
      let fld = fields[i];
      if (re.test(d[fld])) {
        return true;
      }
    }
    return false;
  }
}
