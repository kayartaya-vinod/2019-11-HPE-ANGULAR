import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SimpleSearchComponent } from './components/search/simple-search/simple-search.component';
import { AdvancedSearchComponent } from './components/search/advanced-search/advanced-search.component';

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
  {
    path: 'search', 
    component: SearchComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'simple'
      },
      {
        path: 'simple',
        component: SimpleSearchComponent
      },
      {
        path: 'advanced',
        component: AdvancedSearchComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
