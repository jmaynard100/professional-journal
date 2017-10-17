import { LoginGuard } from './services/login.guard';
import { SearchAllComponent } from './components/search-all/search-all.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateHistoryComponent } from './components/create-history/create-history.component';
import { CreateJournalComponent } from './components/create-journal/create-journal.component';
import { EntryHistoryComponent } from './components/entry-history/entry-history.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import { JournalListingComponent } from './components/journal-listing/journal-listing.component';
import { JournalComponent } from './components/journal/journal.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user-guard';

// Defines the components which are placed in the route for each path.
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'journal/:jid',
    component: JournalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journals',
    component: JournalListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journal/:jid/entry/new',
    component: CreateEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journal/:jid/entry/:eid/history',
    component: EntryHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journals/new',
    component: CreateJournalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journal/:jid/entry/:eid/revise',
    component: CreateHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'journals/search-all',
    component: SearchAllComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
