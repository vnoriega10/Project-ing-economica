import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisComponent } from './cis.component';

describe('CisComponent', () => {
  let component: CisComponent;
  let fixture: ComponentFixture<CisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CisComponent]
    });
    fixture = TestBed.createComponent(CisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
