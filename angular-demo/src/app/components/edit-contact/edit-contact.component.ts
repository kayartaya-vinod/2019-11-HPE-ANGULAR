import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.service['contact']) {
      this.contact = this.service['contact'];
      delete this.service['contact'];
    }
    else {
      this.activatedRoute.params.subscribe(p => {
        this.service.getContactById(p.contactId)
          .subscribe(data => this.contact = data);
      });
    }
  }

  saveChanges() {
    this.service.updateContact(this.contact)
      .subscribe(()=>{
        this.router.navigate(['/view-details', this.contact.id]);
        window.alert('Update successful!');
      }, ()=>{
        window.alert('There was a problem while saving changes!!')
      });
  }

}
