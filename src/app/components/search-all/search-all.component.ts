import { UserDataService } from './../../services/user-data.service';
import { ApiService } from './../../services/api.service';
import { Journal, JournalEntry } from './../../journal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent implements OnInit {
  public journals: Array <any>;
  public visibleJournals: Array <any>;
  public journal: Journal;
  public visibleEntries: Array <any>;
  public searchParam = '';
  constructor (private userData: UserDataService) {
  }

  ngOnInit() {
    this.journals = this.userData.getJournals();
    this.journals.forEach(journal => {
      journal.journalEntry.forEach((item, index) => {
        item['id'] = index;
      });
    });
  }
/* checks whether a journal contains the search value in any of the entries.*/
  journalContains(journal: Journal): Boolean {
    let contains = false;
    this.visibleEntries = [];
    this.journal = journal;
    journal.journalEntry.forEach(entry => {
      this.visibleEntries.push(entry);
      console.log(this.visibleEntries);
      if ((entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1)
        && entry.hidden === false && entry.deleted === false) {
        contains = true;
      }
    });
    return contains;
  }
/* Checks whether an entry contains the search value.*/
  entryContains(entry: JournalEntry): Boolean {
    console.log(entry);
    let contains = false;
    if ((entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1)
      && entry.hidden === false && entry.deleted === false) {
      contains = true;
    }
    return contains;
  }

  searchJournals(searchValue: string): void {
    this.searchParam = searchValue;
    this.filterJournals();
  }
/* Filters Journals to create a list of the journals which should be visible to the user based on 
    the contents of the search box.*/
  filterJournals(): void {
    let contains = false;
    this.visibleJournals = [];
    this.journals.forEach(journal => {
      journal.journalEntry.forEach(entry => {
        if ((entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1)
          && entry.hidden === false && entry.deleted === false) {
          contains = true;
        }
      });
      if (contains) {
        this.visibleJournals.push(journal);
        console.log(this.visibleJournals);
      }
    });
  }

  setJournal(journal: Journal) {
    this.visibleEntries = [];
    this.journal = journal;
    journal.journalEntry.forEach(entry => {
      this.visibleEntries.push(entry);
      console.log(this.visibleEntries);
    });
  }

}
