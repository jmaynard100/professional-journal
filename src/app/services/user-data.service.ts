import { User } from './../user.model';
import { Journal, JournalEntry } from './../journal.model';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  private userData;
  private journals;
  constructor(private api: ApiService) {  }

  public login(username, password): Promise<any> {
    return this.api.authenticateUser(username, password).then(function(user){
      this.userData = user;
    }.bind(this)).then(() => this.setJournals(this.userData._id));
  }

  public createUser(user): Promise<any> {
    return this.api.createUser(user);
  }

  public setJournals(userId): Promise<any> {
    return this.api.getJournals(this.userData._id).then(function(journals) {
      this.journals = journals;
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
}
