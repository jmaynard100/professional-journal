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

  public setJournals(userId): Promise<any> {
    return this.api.getJournals(this.userData._id).then(function(journals) {
      this.journals = journals;
    }.bind(this));

  }

  public createJournal(journal): Promise<any> {
    return this.api.createJournal(journal).then(() =>
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
