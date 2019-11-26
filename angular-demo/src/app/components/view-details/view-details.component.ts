import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  // keyword 'private' to a parameter, makes it as a member variable
  // or 'public' or 'protected'
  constructor(private service: ContactService) { }

  ngOnInit() {
    // temporary fix; this should fetch data dynamically based
    // on user's choice
    this.service.getContactById(13)
      .subscribe(data => this.contact = data);
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
