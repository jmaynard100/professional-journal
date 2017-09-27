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
      this.journal = this.userData.getJournal(this.id);
      this.visibleEntries = this.journal.journalEntry.filter((entry) => entry.hidden === false && entry.deleted === false);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
