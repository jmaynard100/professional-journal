import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() { }
  private message = '';
  private severityOptions = {
    'red': 'alert-danger',
    'green': 'alert-success',
    'yellow': 'alert-warning'
  };
  private severity = '';
  setMessage(message: string, color: string) {
    this.message = message;
    this.severity = this.severityOptions[color];
    setTimeout(() => {
        console.log('Emptying Message');
        this.emptyMessage();
      },
      5000
    );
  }

  getMessage(): string {
    return this.message;
  }

  getSeverity(): string {
    return this.severity;
  }

  emptyMessage() {
    this.message = '';
    this.severity = '';
  }

}
