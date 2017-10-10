import { Journal, JournalEntry, EntryHistory } from './journal.model';
import { UserDataService } from './services/user-data.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker';

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
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    DatepickerModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
