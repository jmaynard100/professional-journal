import { UserDataService } from './../../services/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.css']
})
export class CreateJournalComponent implements OnInit {
  createJournalForm: FormGroup;
  constructor(private fb: FormBuilder, private userData: UserDataService, private router: Router) {
    this.createJournalForm = this.fb.group({
      journalName: [ '', Validators.required ],
      journalSummary: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const journal = {
      'journalName': this.createJournalForm.controls.journalName.value,
      'journalSummary': this.createJournalForm.controls.journalSummary.value,
      'journalEntries': {},
      'userId': this.userData.getUser()._id,
    };
    this.userData.createJournal(journal).then(() =>
      this.router.navigate(['/journals'])
    );
  }
}
