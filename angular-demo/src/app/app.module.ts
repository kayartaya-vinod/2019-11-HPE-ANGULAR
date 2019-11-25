import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    HomeComponent,
    ViewDetailsComponent,
    FullnamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
