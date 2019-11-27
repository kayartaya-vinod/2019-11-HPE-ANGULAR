import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {

  @Input()
  contact: Contact; // this should be recieved from the parent component

  @Output()
  deleted: EventEmitter<number> = new EventEmitter();

  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  confirmAndDelete(): void {
    if (window.confirm('Are you sure?')) {
      this.service.deleteContact(this.contact.id)
        .subscribe(() => this.deleted.emit(this.contact.id));
    }
  }

  cacheContact() {
    // cache the current contact instance in the service singleton object
    this.service['contact'] = this.contact;
    // window.sessionStorage['contact'] = this.contact;
    // window.localStorage['contact'] = this.contact;
  }
}
