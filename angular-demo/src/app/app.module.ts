import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

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

const routes: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
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
    FullnamePipe,
    AgePipe,
    ContactCardComponent,
    ContactListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
