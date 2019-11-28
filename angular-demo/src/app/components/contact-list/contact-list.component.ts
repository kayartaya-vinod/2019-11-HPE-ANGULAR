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
  networkError: boolean = false;
  pageNum: number = 1;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.loadMore();
    const $ = window['$'];

    $(window).scroll(() => {
      const wh = $(window).height();
      const st = $(window).scrollTop();
      const dh = $(document).height();

      if (wh + st + 200 >= dh) {
        window['toastr'].info('loading more data...');
        this.loadMore();
      }
    });
  }

  handleDeleteContact(id: number) {
    const index = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
    this.service.emit('contactsloaded', this.contacts.length);
  }

  loadMore() {
    this.service.getAllContacts(this.pageNum++)
      .subscribe(data => {
        this.contacts.push(...data); // spread operator
        this.service.emit('contactsloaded', this.contacts.length);
        this.networkError = false;
      }, () => {
        this.networkError = true;
        setTimeout(() => this.ngOnInit(), 5000);
      });
  }

}
