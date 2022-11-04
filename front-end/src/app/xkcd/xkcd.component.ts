import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {

  /* TODO: allows property data binding with @Input()
   * Modify xkcd.component.html to allow property binding for src and alt
   * and use interpolation to output image safe_title to 'figcaption'
   */
  
  constructor() { }

  ngOnInit(): void {
  }

}
