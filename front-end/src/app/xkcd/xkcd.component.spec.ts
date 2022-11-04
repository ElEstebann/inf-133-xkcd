import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XkcdComponent } from './xkcd.component';

describe('XkcdComponent', () => {
  let component: XkcdComponent;
  let fixture: ComponentFixture<XkcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XkcdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XkcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
