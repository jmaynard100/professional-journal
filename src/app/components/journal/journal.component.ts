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
  public visibleEntries: Array<JournalEntry>;
  constructor(private route: ActivatedRoute, private userData: UserDataService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['jid'];
      console.log(this.id);
      this.journal = this.userData.getJournal(this.id);
      console.log(this.journal);
      this.visibleEntries = this.journal.journalEntry.filter((entry) => entry.hidden === false && entry.deleted === false);
      console.log(this.visibleEntries);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private hideEntry(entry: JournalEntry, i: number): void {
    entry.hidden = true;
    console.log(this.journal);
    this.userData.updateJournal(this.journal).then (() =>
    this.visibleEntries = this.journal.journalEntry.filter((jEntry) => jEntry.hidden === false && jEntry.deleted === false));
  }

  private deleteEntry(entry: JournalEntry, i: number): void {
    entry.deleted = true;
    this.userData.updateJournal(this.journal).then (() =>
    this.visibleEntries = this.journal.journalEntry.filter((jEntry) => jEntry.hidden === false && jEntry.deleted === false));
  }

  private checkBox(e) {
    if (e.target.checked) {
      this.visibleEntries = this.journal.journalEntry.filter((entry) => entry.deleted === false);
      console.log(this.visibleEntries);
    } else {
      this.visibleEntries = this.journal.journalEntry.filter((entry) => entry.hidden === false && entry.deleted === false);
    }
  }

  private searchJournal(searchValue: string) {
    console.log(searchValue);
    this.visibleEntries = [];
    this.journal.journalEntry.forEach(entry => {
      console.log(this.visibleEntries);
      if (entry.content.indexOf(searchValue) !== -1 || entry.title.indexOf(searchValue) !== -1) {
        this.visibleEntries.push(entry);
      }
    });
  }
}
