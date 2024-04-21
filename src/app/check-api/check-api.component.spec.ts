import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckApiComponent } from './check-api.component';

describe('CheckApiComponent', () => {
  let component: CheckApiComponent;
  let fixture: ComponentFixture<CheckApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckApiComponent]
    });
    fixture = TestBed.createComponent(CheckApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
