import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
// import swal from 'sweetalert';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  // keyword 'private' to a parameter, makes it as a member variable
  // or 'public' or 'protected'
  constructor(private service: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {

      if (this.service['contact']) {
        // console.log('found contact in cache');
        this.contact = this.service['contact'];
        // empty the cache
        delete this.service['contact'];
      }
      else {
        // console.log('contact not found in cache; getting from REST endpoint.');
        this.service.getContactById(p.contactId)
          .subscribe(
            (data) => this.contact = data,
            () => {
              window['toastr'].error('No data found!');
              this.router.navigate(['/'])
            }
          );
      }

    });

    // let id = this.activatedRoute.snapshot.params['contactId'];
    // this.service.getContactById(id).subscribe(data => this.contact = data);
  }

  cacheContact() {
    this.service['contact'] = this.contact;
  }

  confirmAndDelete(): void {

    if (window.confirm('Are you sure?')) {
      this.service.deleteContact(this.contact.id)
        .subscribe(() => {
          this.service.emit('contactdeleted');
          this.router.navigate(['/']);
          window['toastr'].info('Contact deleted');
        });
    }

  }

}
