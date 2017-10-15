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
  }

  journalContains(journal: Journal): Boolean {
    var contains = false;
    this.visibleEntries = [];
    this.journal = journal;
    journal.journalEntry.forEach(entry => {
      this.visibleEntries.push(entry);
      console.log(this.visibleEntries);
      if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
        contains = true;
      }
    });
    return contains;
  }

  entryContains(entry: JournalEntry): Boolean {
    var contains = false;
    if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
      contains = true;
    }
    return contains;
  }

  searchJournals(searchValue: string): void {
    this.searchParam = searchValue;
    this.filterJournals();
  }

  filterJournals(): void {
    var contains = false;
    this.visibleJournals = [];
    this.journals.forEach(journal => {
      journal.journalEntry.forEach(entry => {
        if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
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
