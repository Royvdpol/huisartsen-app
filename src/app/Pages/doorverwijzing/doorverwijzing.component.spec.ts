import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorverwijzingComponent } from './doorverwijzing.component';

describe('DoorverwijzingComponent', () => {
  let component: DoorverwijzingComponent;
  let fixture: ComponentFixture<DoorverwijzingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorverwijzingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorverwijzingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
