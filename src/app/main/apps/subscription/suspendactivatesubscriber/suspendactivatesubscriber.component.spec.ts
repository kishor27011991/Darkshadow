import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendactivatesubscriberComponent } from './suspendactivatesubscriber.component';

describe('SuspendactivatesubscriberComponent', () => {
  let component: SuspendactivatesubscriberComponent;
  let fixture: ComponentFixture<SuspendactivatesubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendactivatesubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendactivatesubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
