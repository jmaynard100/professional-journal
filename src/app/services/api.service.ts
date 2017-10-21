import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }
  /* Checks whether the username and password provided get a user from the database
      returns the user and passes it back to the userDataService.*/
  public authenticateUser(username, password): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.get('/api/get-users?username=' + username + '&password=' + password).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Get request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    });
    return promise;
  }
/* Creates a new user object in the database out of the user object it receives 
    and posts it to the database.*/
  public createUser(user): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.post('/api/create-user', user).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Post request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    });
    return promise;
  }
  /* Gets all Journal objects stored in the database with the required userId 
      returns an array of these objects to the userDataService.*/
  public getJournals(userId): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.get('/api/get-journals?userId=' + userId).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Get request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    });
    return promise;
  }
/* Creates a journal object from the supplied journal and creates it in the database */
  public createJournal(journal): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.post('/api/create-journal', journal).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Post request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    });
    return promise;
  }
/* Updates an existing journal in the database with a new one. */
  public updateJournal(journal): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.post('/api/update-journal', journal).subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Update request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    });
    return promise;
  }
}
