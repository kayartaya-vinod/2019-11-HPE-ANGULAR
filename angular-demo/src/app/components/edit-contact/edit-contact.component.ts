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
          .subscribe(
            data => this.contact = data,
            ()=>{
              window['toastr'].error('No data found!');
              this.router.navigate(['/'])
            });
      });
    }
  }

  saveChanges() {
    this.service.updateContact(this.contact)
      .subscribe(()=>{
        this.router.navigate(['/view-details', this.contact.id]);
        // window.alert('Update successful!');
        window['toastr'].success('Update successful!', 'Phonebook App v1.0');
      }, ()=>{
        window['toastr'].error('There was a problem while saving changes!!', 'Phonebook App v1.0');
      });
  }

  back() {
    window.history.back();
    window['$']([document.documentElement, document.body]).animate({
      scrollTop: window['scrollTop']
    }, function(){
      window['scrollTop'] = 0;
    });
  }

}
