import { UserDataService } from './../../services/user-data.service';
import { ApiService } from './../../services/api.service';
import { Journal } from './../../journal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent implements OnInit {
  public journals: Array<any>;
  public searchParam = '';
  constructor (private userData: UserDataService) {
  }

  ngOnInit() {
    this.journals = this.userData.getJournals();
  }

  journalContains(journal: Journal): Boolean {
    var contains = false;
    journal.journalEntry.forEach(entry => {
      if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
        contains = true;
      } 
    });
    return contains;
  }

  searchJournals(searchValue: string): void {
    this.searchParam = searchValue;
    this.filterEntries();
  }

  filterEntries(): void {

  }

}
