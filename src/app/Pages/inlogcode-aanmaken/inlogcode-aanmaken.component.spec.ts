import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogcodeAanmakenComponent } from './inlogcode-aanmaken.component';

describe('InlogcodeAanmakenComponent', () => {
  let component: InlogcodeAanmakenComponent;
  let fixture: ComponentFixture<InlogcodeAanmakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlogcodeAanmakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogcodeAanmakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
