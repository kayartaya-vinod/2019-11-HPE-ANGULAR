import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: '../edit-contact/edit-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactService,
    private router: Router) { }

  ngOnInit() {
  }

  saveChanges() {
    this.service.addContact(this.contact)
      .subscribe(c => {
        this.router.navigate(['/view-details', c.id]);
        window['toastr'].success('Contact added successfully!');
      });
  }

}
