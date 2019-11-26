import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  contact: Contact;

  // keyword 'private' to a parameter, makes it as a member variable
  // or 'public' or 'protected'
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // temporary fix; code needs to be moved to a service layer
    const url = 'http://localhost:3000/contacts/22';
    this.http.get(url);
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
