import { User } from './../user.model';
import { Journal, JournalEntry } from './../journal.model';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  private userData = null;
  private journals;
  constructor(private api: ApiService) {
    if (localStorage.getItem('journalUserData') !== undefined && localStorage.getItem('journalUserData') !== undefined) {
      this.userData = JSON.parse(localStorage.getItem('journalUserData'));
      this.journals = JSON.parse(localStorage.getItem('journalData'));
    }
  }

  public login(username, password): Promise<any> {
    return this.api.authenticateUser(username, password).then(function(user){
      this.userData = user;
      localStorage.setItem('journalUserData', JSON.stringify(this.userData));
    }.bind(this)).then(() => this.setJournals(this.userData._id));
  }

  public createUser(user): Promise<any> {
    return this.api.createUser(user);
  }

  public setJournals(userId): Promise<any> {
    return this.api.getJournals(this.userData._id).then(function(journals) {
      this.journals = journals;
      localStorage.setItem('journalData', JSON.stringify(journals));
    }.bind(this));

  }
  public getJournal(journalId): Journal {
    const journalList = this.journals.filter((journal) => {
      return journal._id.toString() === journalId.toString();
    });
    return journalList[0];
  }

  public createJournal(journal): Promise<any> {
    return this.api.createJournal(journal).then(() =>
      this.setJournals(this.userData._id)
    );
  }

  public updateJournal(journal): Promise<any> {
    return this.api.updateJournal(journal).then(() =>
      this.setJournals(this.userData._id)
    );
  }

  public getUser() {
    return this.userData;
  }
  public getJournals() {
    return this.journals;
  }
  public emptyData() {
    this.userData = null;
    this.journals = [];
  }
}
