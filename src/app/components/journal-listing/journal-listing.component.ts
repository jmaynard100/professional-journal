import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-listing',
  templateUrl: './journal-listing.component.html',
  styleUrls: ['./journal-listing.component.css']
})
export class JournalListingComponent implements OnInit {

  constructor (private api: ApiService) {
    console.log(api.testFunction());
  }

  ngOnInit() {
    this.api.testFunction().then((response: any) => {
      console.log(response);
    }).catch((ex: any) => {
      console.log('Exception');
    });
  }
}
