import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  // contacts: Observable<Contact[]>;
  contacts: Contact[] = [];

  constructor(private service: ContactService) { }

  ngOnInit() {
    //this.contacts = this.service.getAllContacts();
    this.service.getAllContacts()
      .subscribe(data => this.contacts = data);
  }

  handleDeleteContact(id: number) {
    const index = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
  }

}
