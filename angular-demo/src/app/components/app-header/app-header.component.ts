import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  count: number = 0;
  dir: string = 'ltr';

  constructor(service: ContactService) {
    service.on('contactsloaded', count => this.count = count);
    service.on('contactdeleted', () => this.count--);
    service.on('dirchanged', dir => this.dir = dir);
  }

}
