import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchXkcdService } from './services/fetch-xkcd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  timerId:  ReturnType<typeof setInterval> | null = null;
  isLoading = false;
  imgSrc = '';
  imgAlt = '';
  imgTitle = '';
  private SECOND = 1000;
  private TIME = 15 * this.SECOND;

  /* TODO:
   * Subscribe to the events and pass the information to the xkcd component and implement loading.
   * Also, perform property binding in app.component.html to see the result.
   */
  constructor(private fetchXkcdService: FetchXkcdService) {
    
  }

  ngOnInit(): void {
    this.fetchXkcdService.getRandomXKCD();
    this.timerId = setInterval(this.fetchXkcdService.getRandomXKCD, this.TIME);
  }

  ngOnDestory(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
