import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnopSpoedComponent } from './knop-spoed.component';

describe('KnopSpoedComponent', () => {
  let component: KnopSpoedComponent;
  let fixture: ComponentFixture<KnopSpoedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnopSpoedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnopSpoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
