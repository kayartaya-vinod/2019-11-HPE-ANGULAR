import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  contact: Contact;

  constructor() { }

  ngOnInit() {
    // temporary fix; later we shall recieve this from another component
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstname = 'Vinod';
    this.contact.lastname = 'Kumar';
    this.contact.phone = '9731424784';
    this.contact.email = 'vinod@vinod.co';
  }

  confirmAndDelete(): void {
    let choice = window.confirm('Are you sure you want to delete this?');
    if (choice) {
      // delete
    }
    else {
      // don't do anything
    }
  }

}
