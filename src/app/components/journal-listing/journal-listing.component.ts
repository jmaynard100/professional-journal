import { UserDataService } from './../../services/user-data.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-listing',
  templateUrl: './journal-listing.component.html',
  styleUrls: ['./journal-listing.component.css']
})
export class JournalListingComponent implements OnInit {
  public journals: Array<any>;
  constructor (private userData: UserDataService) {
  }

  ngOnInit() {
    this.journals = this.userData.getJournals();
  }
}
