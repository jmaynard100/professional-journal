import { Journal, JournalEntry, EntryHistory } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  id: Number;
  jid: number;
  private sub: any;
  public journal: Journal;
  createEntryForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userData: UserDataService, private router: Router) {
    this.createEntryForm = this.fb.group({
      entryTitle: [ '', [Validators.required, Validators.minLength(1)] ],
      entryContent: [ '', [Validators.required, Validators.minLength(1)] ],
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.jid = +params['jid'];
      this.journal = this.userData.getJournal(this.jid);
    });
  }
/* Creates a new entry object out of the submitted inputs from the form.*/
  onSubmit() {
    const entry = new JournalEntry();
    entry.title = this.createEntryForm.controls.entryTitle.value;
    entry.content = this.createEntryForm.controls.entryContent.value;
    entry.entryHistory = [];
    entry.createdAt = new Date();
    entry.lastUpdated = new Date();
    entry.hidden = false;
    entry.deleted = false;
    this.journal.journalEntry.unshift(entry);
    this.userData.updateJournal(this.journal).then(() =>
      this.router.navigate(['/journal', this.jid])
    );
  }

}
