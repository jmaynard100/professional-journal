import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

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

}
