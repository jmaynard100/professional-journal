import { Journal, JournalEntry, EntryHistory } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-history',
  templateUrl: './create-history.component.html',
  styleUrls: ['./create-history.component.css']
})
export class CreateHistoryComponent implements OnInit {
  jid: number;
  eid: number;
  private sub: any;
  public journal: Journal;
  public entry: JournalEntry;
  createHistoryForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userData: UserDataService, private router: Router) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.jid = +params['jid'];
      this.journal = this.userData.getJournal(this.jid);
      this.eid = +params['eid'];
      this.entry = this.journal.journalEntry[this.eid];
    });
    this.createHistoryForm = this.fb.group({
      historyContent: [ this.entry.content, Validators.required ],
      reasonSummary: [ '', Validators.required ],
    });
  }

  onSubmit() {
    const history = new EntryHistory();
    history.content = this.entry.content;
    history.reasonSummary = this.createHistoryForm.controls.reasonSummary.value;
    history.date = new Date();
    history.hidden = false;
    history.deleted = false;
    this.entry.entryHistory.unshift(history);
    const newEntry = new JournalEntry();
    newEntry.content = this.createHistoryForm.controls.historyContent.value;
    newEntry.title = this.entry.title;
    newEntry.lastUpdated =  new Date();
    newEntry.createdAt = this.entry.createdAt;
    newEntry.hidden = this.entry.hidden;
    newEntry.deleted = this.entry.deleted;
    newEntry.entryHistory = this.entry.entryHistory;

    this.journal.journalEntry[this.eid] = newEntry;
    this.userData.updateJournal(this.journal).then(() =>
      this.router.navigate(['/journal', this.jid])
    );
  }

}
