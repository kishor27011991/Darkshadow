import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderlistComponent } from './reminderlist.component';

describe('ReminderlistComponent', () => {
  let component: ReminderlistComponent;
  let fixture: ComponentFixture<ReminderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
