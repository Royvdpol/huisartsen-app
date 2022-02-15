import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodoproepComponent } from './noodoproep.component';

describe('NoodoproepComponent', () => {
  let component: NoodoproepComponent;
  let fixture: ComponentFixture<NoodoproepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodoproepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodoproepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
