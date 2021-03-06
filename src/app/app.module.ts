import { LoginGuard } from './services/login.guard';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './services/user-guard';
import { Journal, JournalEntry, EntryHistory } from './journal.model';
import { UserDataService } from './services/user-data.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker';
import { CommonModule }                             from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { JournalComponent } from './components/journal/journal.component';
import { JournalListingComponent } from './components/journal-listing/journal-listing.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { EntryHistoryComponent } from './components/entry-history/entry-history.component';
import { CreateJournalComponent } from './components/create-journal/create-journal.component';
import { CreateHistoryComponent } from './components/create-history/create-history.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchAllComponent } from './components/search-all/search-all.component';
import {APP_BASE_HREF} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JournalComponent,
    JournalListingComponent,
    CreateEntryComponent,
    EntryHistoryComponent,
    CreateJournalComponent,
    CreateHistoryComponent,
    RegisterComponent,
    SearchAllComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    DatepickerModule,
    BrowserAnimationsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, UserDataService, AuthGuard, AlertService, LoginGuard,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
