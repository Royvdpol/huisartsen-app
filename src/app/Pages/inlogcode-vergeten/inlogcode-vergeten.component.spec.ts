import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogcodeVergetenComponent } from './inlogcode-vergeten.component';

describe('InlogcodeVergetenComponent', () => {
  let component: InlogcodeVergetenComponent;
  let fixture: ComponentFixture<InlogcodeVergetenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlogcodeVergetenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogcodeVergetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
