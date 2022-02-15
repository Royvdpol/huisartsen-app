import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginKnopComponent } from './begin-knop.component';

describe('BeginKnopComponent', () => {
  let component: BeginKnopComponent;
  let fixture: ComponentFixture<BeginKnopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginKnopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginKnopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
