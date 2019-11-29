import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Array<Route> = [
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
    path: 'contact',
    loadChildren: './contact-form.module#ContactFormModule'
  },
//   {
//     path: 'edit-contact/:contactId',
//     component: EditContactComponent
//   },
//   {
//     path: 'add-new-contact',
//     component: AddContactComponent
//   },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
