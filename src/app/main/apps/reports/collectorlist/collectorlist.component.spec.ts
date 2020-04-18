import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorlistComponent } from './collectorlist.component';

describe('CollectorlistComponent', () => {
  let component: CollectorlistComponent;
  let fixture: ComponentFixture<CollectorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
