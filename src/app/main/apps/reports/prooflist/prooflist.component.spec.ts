import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProoflistComponent } from './prooflist.component';

describe('ProoflistComponent', () => {
  let component: ProoflistComponent;
  let fixture: ComponentFixture<ProoflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProoflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProoflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
