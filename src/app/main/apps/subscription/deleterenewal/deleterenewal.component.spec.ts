import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterenewalComponent } from './deleterenewal.component';

describe('DeleterenewalComponent', () => {
  let component: DeleterenewalComponent;
  let fixture: ComponentFixture<DeleterenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleterenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
