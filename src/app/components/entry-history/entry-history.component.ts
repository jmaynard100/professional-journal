import { Journal, JournalEntry } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-history',
  templateUrl: './entry-history.component.html',
  styleUrls: ['./entry-history.component.css']
})
export class EntryHistoryComponent implements OnInit, OnDestroy {
  jid: number;
  eid: number;
  private sub: any;
  public journal: Journal;
  public entry: JournalEntry;
  public len: number;
  constructor(private route: ActivatedRoute, private userData: UserDataService) { }
/* Initialises some variables used in HTML.*/
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.jid = +params['jid'];
      this.journal = this.userData.getJournal(this.jid);
      this.eid = +params['eid'];
      this.entry = this.journal.journalEntry[this.eid];
      this.len = this.entry.entryHistory.length;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
