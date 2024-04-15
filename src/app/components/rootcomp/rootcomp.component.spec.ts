import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootcompComponent } from './rootcomp.component';

describe('RootcompComponent', () => {
  let component: RootcompComponent;
  let fixture: ComponentFixture<RootcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootcompComponent]
    });
    fixture = TestBed.createComponent(RootcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
