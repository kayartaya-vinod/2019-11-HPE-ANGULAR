import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// for the above to work, install rxjs-compat

const baseUrl = 'http://localhost:3000/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id)
      .do(data => console.log(data))
      .map(data => data as Contact);
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get(baseUrl)
      .map(data => data as Array<Contact>);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }
}
