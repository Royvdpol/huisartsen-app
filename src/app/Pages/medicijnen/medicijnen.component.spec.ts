import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicijnenComponent } from './medicijnen.component';

describe('MedicijnenComponent', () => {
  let component: MedicijnenComponent;
  let fixture: ComponentFixture<MedicijnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicijnenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicijnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
