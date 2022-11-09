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

  // to pass data to another component
  @Output() imageSrc = new EventEmitter<string>();
  @Output() imageAlt = new EventEmitter<string>();
  @Output() imageTitle = new EventEmitter<string>();

  getRandomXKCD = async () => {
    const URL = 'http://localhost:8000/randomXKCD';
    try {
      let res = await fetch(URL);
      res = this.checkStatus(res);
      const result = await res.json();
      this.imageSrc.emit(result['img']);
      this.imageAlt.emit(result['alt']);
      this.imageTitle.emit(result['safe_title']);
    } catch (err) {
      console.log(err);
    }
  }

  checkStatus(response: Response) {
    if (!response.ok) {
      throw Error('Error in request: ' + response.statusText);
    }
    return response;
  }
}
