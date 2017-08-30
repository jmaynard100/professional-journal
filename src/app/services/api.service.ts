import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

   }
  public testFunction(): Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      this.http.get('/api/get-users').subscribe(
        (res: Response) => {
          const result = res.json();
          resolve(result);
          reject({invalid: 'Get request Failed'});
        },
        (err) => {
          reject({invalid: 'Fuck'});
        }
      );
    }
  );
  return promise;
  }

}
