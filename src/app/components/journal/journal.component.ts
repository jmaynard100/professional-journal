import { Journal, JournalEntry } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Shows a list of all Entries in the specified Journal object. This list can be modified using the search
 * options on the page. Can also create a new Entry.
 */
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit, OnDestroy {
  /**
   * Id of the Journal the user has opened.
   */
  id: Number;
  private sub: any;
  /**
   * The current journal object
   */
  public journal: Journal;
  /**
   * Whether hidden entries can appear amongst the visible entries 
   */
  public showHidden = false;
  /**
   * Whether deleted entries can appear amongst the visible entries 
   */
  public showDeleted = false;
  /**
   * The search parameter the user entered in the search field
   */
  public searchParam = '';
  /**
   * The minimum date field
   */
  public dateMin: Date = null;
  /**
   * The maximum date field
   */
  public dateMax: Date = null;
  /**
   * An array of all visible entries that should show up on the page.
   */
  public visibleEntries: Array<JournalEntry>;
  constructor(private route: ActivatedRoute, private userData: UserDataService) {}

  /**
   * Stores the currently selected Journal and indexes all the entries of this Journal.
   */
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
  /**
   * Sets the Hidden flag on the entry to true.
   * @param entry The currently selected entry.
   */
  private hideEntry(entry: JournalEntry): void {
    entry.hidden = true;
    console.log(this.journal);
    this.userData.updateJournal(this.journal).then (() => this.filterEntries());
  }
  /**
   * Sets the Hidden flag on the entry to false.
   * @param entry The currently selected entry.
   */
  private unhideEntry(entry: JournalEntry): void {
    entry.hidden = false;
    console.log(this.journal);
    this.userData.updateJournal(this.journal).then (() => this.filterEntries());
  }

  /**
   * Sets the Deleted flag on the entry to true.
   * @param entry The currently selected entry.
   */
  private deleteEntry(entry: JournalEntry): void {
    entry.deleted = true;
    this.userData.updateJournal(this.journal).then (() => this.filterEntries());
  }

  /**
   * Called whenever the Show Hidden box is clicked, reverses the
   * showHidden field.
   */
  checkHiddenBox() {
    this.showHidden = !this.showHidden;
    this.filterEntries();
  }

  /**
   * Called whenever the Show Deleted box is clicked, reverses the
   * showDeleted field.
   */
  checkDeletedBox() {
    this.showDeleted = !this.showDeleted;
    this.filterEntries();
  }
  /**
   * Used to determine which entries to be shown to the user. Run after every possible change to the visibleEntries field.
   */
  private filterEntries() {
    this.visibleEntries = [];
    this.journal.journalEntry.forEach(entry => {
      console.log(this.visibleEntries);
      if (entry.content.indexOf(this.searchParam) !== -1 || entry.title.indexOf(this.searchParam) !== -1) {
        if (!this.showHidden && entry.hidden === true) {
          return;
        } else if (!this.showDeleted && entry.deleted === true) {
          return;
        } else if (this.dateMin !== null && new Date(entry.createdAt) < this.dateMin) {
          return;
        } else if (this.dateMax !== null && new Date(entry.createdAt) > this.dateMax) {
          return;
        }
        console.log (typeof new Date(entry.createdAt));
        console.log (typeof this.dateMin);
        console.log(new Date(entry.createdAt) < this.dateMin);
        this.visibleEntries.push(entry);
      }
    });
  }
  /**
   * Updates the dateMin field and the visible entries.
   * @param dateMin The contents of the dateMin Datepicker
   */
  setDateMin(dateMin: Date) {
    console.log(dateMin);
    this.dateMin = dateMin;
    this.filterEntries();
  }
  /**
   * Updates the dateMax field and the visible entries.
   * @param dateMax The contents of the dateMax Datepicker
   */
  setDateMax(dateMax: Date) {
    this.dateMax = dateMax;
    this.filterEntries();
  }
  /**
   * Updates the searchParam field and visible entries.
   * @param searchValue The contents of the Search field
   */
  searchJournal(searchValue: string) {
    console.log(searchValue);
    this.searchParam = searchValue;
    this.filterEntries();
  }
}
