import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoedComponent } from './spoed.component';

describe('SpoedComponent', () => {
  let component: SpoedComponent;
  let fixture: ComponentFixture<SpoedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
