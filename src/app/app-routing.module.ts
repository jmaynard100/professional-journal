import { CreateHistoryComponent } from './components/create-history/create-history.component';
import { CreateJournalComponent } from './components/create-journal/create-journal.component';
import { EntryHistoryComponent } from './components/entry-history/entry-history.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { JournalListingComponent } from './components/journal-listing/journal-listing.component';
import { JournalComponent } from './components/journal/journal.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Defines the components which are placed in the route for each path.
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'journal/:jid',
    component: JournalComponent,
  },
  {
    path: 'journals',
    component: JournalListingComponent,
  },
  {
    path: 'journal/:jid/entry/new',
    component: CreateEntryComponent,
  },
  {
    path: 'journal/:jid/entry/:eid/history',
    component: EntryHistoryComponent,
  },
  {
    path: 'journals/new',
    component: CreateJournalComponent,
  },
  {
    path: 'journal/:jid/entry/:eid/revise',
    component: CreateHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
