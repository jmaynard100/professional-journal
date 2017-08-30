import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
