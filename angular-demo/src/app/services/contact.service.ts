import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { EventEmitter } from 'events'; // note's core module

// for the above to work, install rxjs-compat

const baseUrl = 'http://localhost:3000/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends EventEmitter {

  constructor(private http: HttpClient) { 
    // in JS, a class if extends another class, must call parent constructor
    super();
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id)
      .do(data => console.log(data))
      .map(data => data as Contact);
  }

  getAllContacts(pageNum: number = 1): Observable<Contact[]> {
    const params = { _page: pageNum.toString(), _limit: '5' } ;
    const headers = {}
    return this.http.get(baseUrl, { params, headers })
      .map(data => data as Array<Contact>);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(baseUrl + contact.id, contact);
  }

  addContact(contact: Contact): Observable<Contact> {
    console.log('sending ', contact); // without id
    return this.http.post(baseUrl, contact)
      .do(resp => console.log('recd. ', resp)) // with auto generated id
      .map(resp => resp as Contact);
  }
}
