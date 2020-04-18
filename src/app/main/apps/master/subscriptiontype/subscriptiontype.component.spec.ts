import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptiontypeComponent } from './subscriptiontype.component';

describe('SubscriptiontypeComponent', () => {
  let component: SubscriptiontypeComponent;
  let fixture: ComponentFixture<SubscriptiontypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptiontypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
