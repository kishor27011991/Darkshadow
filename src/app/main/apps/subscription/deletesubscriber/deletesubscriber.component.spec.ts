import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesubscriberComponent } from './deletesubscriber.component';

describe('DeletesubscriberComponent', () => {
  let component: DeletesubscriberComponent;
  let fixture: ComponentFixture<DeletesubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
