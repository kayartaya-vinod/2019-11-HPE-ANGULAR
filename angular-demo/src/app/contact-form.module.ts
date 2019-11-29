import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        EditContactComponent,
        AddContactComponent,
        FullnamePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        EditContactComponent,
        AddContactComponent,
        FullnamePipe
    ]
})
export class ContactFormModule { }