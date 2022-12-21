import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactmanagerComponent,
    AddcontactComponent,
    UpdatecontactComponent,
    ViewcontactComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
