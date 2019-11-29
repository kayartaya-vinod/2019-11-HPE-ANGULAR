import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactService } from './services/contact.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactFormModule } from './contact-form.module';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

const routes: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    // component: HomeComponent
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'view-details/:contactId',
    component: ViewDetailsComponent
  },
  {
    path: 'edit-contact/:contactId',
    component: EditContactComponent
  },
  {
    path: 'add-new-contact',
    component: AddContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    HomeComponent,
    ViewDetailsComponent,
    AgePipe,
    ContactCardComponent,
    ContactListComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    ContactFormModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http)
      }
    })
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
