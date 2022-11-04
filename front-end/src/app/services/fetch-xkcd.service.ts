import { Injectable, Output, EventEmitter } from '@angular/core';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class FetchXkcdService {
  /* TODO: Finish implementing this service that fetches a random xkcd comic
   * from the backend 'GET' end point
   * The function that fetches from the backend should be named 'getRandomXKCD'
   * and should be implemented as an arrow function
   * 'this' in regular function varies based on how it is invoked
   * while 'this' in arrow function is just the 'this' in the outer function
   * Remember to implement error handling!
   */
  constructor() {}

  checkStatus(response: Response) {
    if (!response.ok) {
      throw Error('Error in request: ' + response.statusText);
    }
    return response;
  }
}
