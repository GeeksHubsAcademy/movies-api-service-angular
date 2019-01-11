import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  debugMode = false;
  constructor() {}
  log(...args: Array<any>) {
    this.debugMode && console.log(...args);
  }
  error(...args: Array<any>) {
    if (this.debugMode) {
      console.error(...args);
    }
  }
}
