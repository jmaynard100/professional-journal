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
  public journal: any;
  constructor(private route: ActivatedRoute) {
    this.journal = {
      title: 'Journal One',
    };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['jid'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
