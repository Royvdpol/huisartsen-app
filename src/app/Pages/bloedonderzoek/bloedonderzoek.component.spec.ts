import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloedonderzoekComponent } from './bloedonderzoek.component';

describe('BloedonderzoekComponent', () => {
  let component: BloedonderzoekComponent;
  let fixture: ComponentFixture<BloedonderzoekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloedonderzoekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloedonderzoekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
