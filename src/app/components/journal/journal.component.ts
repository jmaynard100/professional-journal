import { Journal, JournalEntry } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Defines a component called journal. Can be called using the selector tag.

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit, OnDestroy {
  id: Number;
  private sub: any;
  public journal: Journal;
  public showHidden = false;
  public showDeleted = false;
  public searchParam = '';
  public dateMin: Date;
  public dateMax: Date;
  public visibleEntries: Array<JournalEntry>;
  constructor(private route: ActivatedRoute, private userData: UserDataService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['jid'];
      console.log(this.id);
      this.journal = this.userData.getJournal(this.id);
      this.journal.journalEntry.forEach((item, index) => {
        item['id'] = index;
      });
      console.log(this.journal);
      this.visibleEntries = this.journal.journalEntry.filter((entry) => entry.hidden === false && entry.deleted === false);
      console.log(this.visibleEntries);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private hideEntry(entry: JournalEntry): void {
    entry.hidden = true;
    console.log(this.journal);
    this.userData.updateJournal(this.journal).then (() => this.filterEntries);
  }

  private unhideEntry(entry: JournalEntry): void {
    entry.hidden = false;
    console.log(this.journal);
    this.userData.updateJournal(this.journal).then (() => this.filterEntries);
  }

  private deleteEntry(entry: JournalEntry): void {
    entry.deleted = true;
    this.userData.updateJournal(this.journal).then (() => this.filterEntries);
  }

  checkHiddenBox() {
    this.showHidden = !this.showHidden;
    this.filterEntries();
  }

  checkDeletedBox() {
    this.showDeleted = !this.showDeleted;
    this.filterEntries();
  }

  private filterEntries() {
    this.visibleEntries = [];
    this.journal.journalEntry.forEach(entry => {
      console.log(this.visibleEntries);
      if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
        if (!this.showHidden && entry.hidden === true) {
          return;
        } else if (!this.showDeleted && entry.deleted === true) {
          return;
        }
        this.visibleEntries.push(entry);
      }
    });
  }

  setDateMin(dateMin: Date) {
    console.log(dateMin);
    this.dateMin = dateMin;
    this.filterEntries();
  }

  setDateMax(dateMax: Date) {
    this.dateMax = dateMax;
    this.filterEntries();
  }

  searchJournal(searchValue: string) {
    console.log(searchValue);
    this.searchParam = searchValue;
    this.filterEntries();
  }
}
