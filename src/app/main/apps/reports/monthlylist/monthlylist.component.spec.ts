import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlylistComponent } from './monthlylist.component';

describe('MonthlylistComponent', () => {
  let component: MonthlylistComponent;
  let fixture: ComponentFixture<MonthlylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
