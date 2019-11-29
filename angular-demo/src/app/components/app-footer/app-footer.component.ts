import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private translate: TranslateService, 
    private service: ContactService) { }

  ngOnInit() {
  }

  changeLang(lang: string, dir: string = 'ltr') {
    this.translate.use(lang);
    this.service.emit('dirchanged', dir);
  }
}
