import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';

const routeConfig: Route[] = [
    {
        path: 'edit/:contactId',
        component: EditContactComponent
    },
    {
        path: 'add',
        component: AddContactComponent
    }
];

@NgModule({
    declarations: [
        EditContactComponent,
        AddContactComponent,
        FullnamePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routeConfig)
    ],
    exports: [
        EditContactComponent,
        AddContactComponent,
        FullnamePipe
    ]
})
export class ContactFormModule { }